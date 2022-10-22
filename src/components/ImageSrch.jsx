import React, {useState} from 'react'

const ImageSrch = ({ searchText }) => {
   const [text, setText] = useState('');

   const onSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    searchText(text)
   }

  return (
    <div className='max-w-xl rounded overflow-hidden my-10 mx-auto' onSubmit={onSubmit}>
      <form className="w-full max-w-xl">
          <div className="flex items-center border-2 border-teal-500 py-2 px-1">
             <input onChange={e => setText(e.target.value)}
              className="searchside appearance-none bg-transparent border-none
                 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                 type="text" placeholder="Search For An Image"
              />
             <button className="flex-shrink-0
                 bg-teal-500 hover:bg-teal-700 border-teal-500
                 hover:border-teal-700 text-sm border-4 text-white py-1 px-4 rounded" type="submit">
                 Search
             </button>
          </div>
      </form>
    </div>
  )
}

export default ImageSrch