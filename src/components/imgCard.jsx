import React from 'react';


const ImgCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
         <div className="rounded overflow-hidden shadow-lg border-[1px] border-teal-500 hover:border-[3px] duration-300 ">
           <img src={image.webformatURL} alt="" className="w-full" />
           <div className="px-2 py-4 flex justify-between align-middle">
             <div>
                <div className=" font-bold text-teal-700 max-w-[230px] text-sm md:text-md xl:text-lg mb-3">
                  Photo Credit: {image.user}
                </div>
                <ul className='tagside text-sm md:text-md lg:text-lg'>
                  <li>
                    <strong>Views: </strong>
                      {image.views}
                  </li>
                 <li>
                   <strong>Downloads: </strong>
                     {image.downloads}
                 </li>
                 <li>
                   <strong>Likes: </strong>
                   {image.likes}
                 </li>
               </ul>
              </div> 
              <div className='flex flex-col gap-1'>
                <a  target="_blank" href={image.largeImageURL} className="flex-shrink-0
                  bg-teal-700 hover:bg-teal-600 text-center border-teal-700
                  hover:border-teal-600 text-[13px] border-2 text-white py-[1px] px-1 rounded">
                  View Image
                </a>
                <a target="_blank" href={image.pageURL} className="flex-shrink-0
                  bg-teal-700 hover:bg-teal-600 border-teal-700 text-center
                  hover:border-teal-600 text-[13px] border-4 text-white py-[1px] px-1 rounded">
                  Download Image
                </a>
              </div>
           </div>
           <div className="px-2 py-2 md:px-2 md:py-4 flex flex-wrap">
              {tags.map((tag, index) => (
             <span key={index} className='inline-block
              bg-gray-100 rounded-md px-3 py-1
               text-black text-sm font-normal mr-2 mb-2 tag-style'>
              #{tag}
             </span>
             ))}
           </div>
         </div> 
       )
}

export default ImgCard