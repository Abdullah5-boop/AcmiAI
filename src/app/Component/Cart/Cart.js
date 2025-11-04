import React from 'react'
import Image from 'next/image'
import Img from "../../../../public/paper.png"

export default function Cart({ customer, setViewId }) {

  return (
    <div className="w-full lg:w-[80%] p-4 border border-gray-200 rounded-lg shadow-sm sm:p-8  ">
      <div>
        <ul role="list" className="divide-y divide-gray-200 text-black dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              {/* Profile Image */}
              <div className="shrink-0">
                <Image
                  className=""
                  src={Img} 
                  alt={`${customer?.name || 'Customer'} image`}
                  width={50} 
                  height={40} 
                />
              </div>

              {/* Name & Email */}
              <div className="flex-1 min-w-0 ms-4 items-center">
                <p className="  truncate  text-[#000033] font-semibold">
                  {customer?.title}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {customer?.content}
                </p>
              </div>

          
              <div className="flex flex-col gap-2 items-center mt-2">
                <div className="inline-flex items-center   text-[#000033] text-sm ">
                  {
                    customer?.tags.map((tag, index) => (
                      <span key={index} className="me-1">
                        #{tag}
                      </span>
                    ))
                  }
                </div>
                <div 
                onClick={() => customer?.doc_id && setViewId(customer.doc_id)}
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 text-end">
                  View all
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
