"use client";
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Cart from './Cart/Cart';
import Nav from './Nav/Nav';
import View from './View/View';
import Banner from './Other/Banner';
import Footer from './Other/Footer';

export default function Page() {
  const [fetchData, setFetchdata] = useState([]);
  const [viewId, setViewId] = useState("");
  const [fetchViewData, setFetchViewData] = useState(null);

  console.log("viewId :", viewId);

  useEffect(() => {
    if (viewId) {
      fetch(`http://127.0.0.1:8000/getDataById?docId=${viewId}`)
        .then(res => res.json())
        .then(data => setFetchViewData(data))
        .catch(err => console.error("Error fetching view data:", err));
    }
  }, [viewId]);

  return (
    <div className='w-[99.2vw] h-auto flex flex-col gap-10'>
      <Nav />
      <Banner />

      <SearchBar setFetchdata={setFetchdata} />

      <section className='w-full lg:w-[80%]  lg:mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {fetchData.length > 0 ? (
            fetchData.map((customer, index) => (
              <Cart
                setViewId={setViewId}
                key={index}
                customer={customer}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-2">
              No results yet. Try searching something.
            </p>
          )}
        </div>
      </section>

      <section >
        {fetchViewData ? (
          <View fetchViewData={fetchViewData} />
        ) : (
          ""
        )}
      </section>
      <Footer></Footer>
    </div>
  );
}
