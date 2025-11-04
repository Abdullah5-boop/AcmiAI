

import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
      
      
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
           Legal docs
          </span>
      

        {/* Right side (language + mobile toggle) */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          {/* Language Button */}
          <button
            type="button"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 rounded-full me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            </svg>
            English (US)
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
          rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row 
          md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
          md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent 
                md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 dark:text-white 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 dark:text-white 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 dark:text-white 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 dark:text-white 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
