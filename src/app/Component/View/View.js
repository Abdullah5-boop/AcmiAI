import React from 'react';

export default function View({ fetchViewData }) {
  return (
    <div className='w-[81%] h-[80%] mx-auto border border-gray-300 rounded-lg p-6 mb-10 overflow-hidden mb-64'>


      <div className=' bg-white '>
        <h2 className='text-4xl font-bold mb-2'>{fetchViewData?.title}</h2>
        <div className='mb-5'>
          {
            fetchViewData?.tags.map((tag, index) =>
              <span href="#" className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm mr-5">{tag}</span>)
          }
        </div>
        <p className='text-gray-700 mb-6 text-2xl'>{fetchViewData?.content}</p>
      </div>
    </div>
  );
}
