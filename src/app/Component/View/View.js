import React from 'react';

export default function View({ fetchViewData }) {
  return (
    <div className=' lg:w-[81%] h-[80%] mx-3 lg:mx-auto border border-gray-300 rounded-lg p-6  overflow-hidden mb-64 '>


      <div className=' bg-white '>
        <h2 className=' text-xl lg:text-4xl font-medium lg:font-bold mb-2'>{fetchViewData?.title}</h2>
        <div className='mb-5'>
          {
            fetchViewData?.tags.map((tag, index) =>
              <span href="#" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm mr-5">{tag}</span>)
          }
        </div>
        <p className='text-gray-700 mb-6 text-xl lg:text-2xl '>{fetchViewData?.content}</p>
      </div>
    </div>
  );
}
