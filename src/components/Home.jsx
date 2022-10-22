import React, { useEffect, useState } from "react";
import ImgCard from "./imgCard";
import ImageSrch from "./ImageSrch";
import ImageHeader from "./ImageHeader";
import ImageFooter from "./ImageFooter";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${term}&per_page=120&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  useEffect(() => {
    // 👇️ scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const imagesPerPage = 18;
  const pagesVisited = pageNumber * imagesPerPage;

  const displayPictures = images.slice(pagesVisited, pagesVisited + imagesPerPage).map((image) => (
      <div className="w-full px-2 mx-auto overflow-hidden mb-3" key={image.id}>
        <ImgCard image={image} />
      </div>
    ));

  const pageCount = Math.ceil(images.length / imagesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <ImageHeader />
      <div className="mx-4">
        <ImageSrch searchText={(text) => setTerm(text)} />
      </div>
      {!isLoading && images.length === 0 && (
        <div className=" flex flex-col justify-center items-center">
          <h1
            className="text-2xl md:text-6xl text-center mx-auto mt-3 mb-5 md:mb-8"
            id="text-msg"
          >
            {" "}
            Oops, No Images Found...{" "}
          </h1>
          <button className="buttons bg-teal-600 px-4 py-1 rounded">
            <a classname=" text-3xl text-blue" href="/">
              Go Home
            </a>
          </button>
        </div>
      )}

      {/* {isLoading ? <h1 className='text-6xl text-center mx-auto mt-3'> Loading... </h1> :  */}
      <div className="sm:columns-2 lg:columns-3 md:gap-x-1 md:gap-y-2 mb-8 md:mb-16">
        {displayPictures}
      </div>
      <div>
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagBtns"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>

      <ImageFooter />
    </div>
  );
};

export default Home;
