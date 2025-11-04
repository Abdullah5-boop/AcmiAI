"use client";
import React, { useEffect, useState } from "react";

export default function SearchBar({ setFetchdata }) {
  const [query, setQuery] = useState(""); // store input value
  console.log(query);

  function fetchData() {
    if (query !== "") {
      fetch(`http://127.0.0.1:8000/matchdata?data=${query}`)
        .then((response) => response.json())
        .then((data) => setFetchdata(data))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setFetchdata([]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log("Search Query:", query);
    fetchData();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timeoutId); // cleanup
  }, [query]);

  return (
    <div>
      <form className="w-[50%] mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
