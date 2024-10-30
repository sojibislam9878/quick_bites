"use client"
import MenuCard from '@/app/component/MenuCard';
import NoData from '@/app/component/NoData';
import Spinner from '@/app/component/Spinner';
import React, { useEffect, useState } from 'react';
const ManuePage = () => {
  const [allItems, setAllItems] = useState([]);
  const cardPerPage = 6;
  const [dataCount, setDataCount] = useState(1);
  const [filter, setFilter] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [serchText, setSearchText] = useState("");
  const [loading, setLoading] = useState("");
  const totalPage = Math.ceil(dataCount / cardPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [...Array(totalPage).keys()].map((i) => i + 1);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `uick-bites-tau.vercel.app/api/allitem?page=${currentPage}&size=${cardPerPage}&filter=${filter}&brand=${brand}&sort=${sort}&search=${search}`
        );
        const data = await res.json();

        setAllItems(data);
        setLoading(false);
        if (brand || filter || search) {
          handleCurrentPageSearch();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, cardPerPage, filter, sort, search, brand]);

  useEffect(() => {
    const fetchDataCount = async () => {
      setLoading(true);
      try {
        const res = await fetch(
         `uick-bites-tau.vercel.app/api/itemcounts?filter=${filter}&brand=${brand}&search=${search}`
        );
        const data = await res.json();
        setDataCount(data.count);
      } catch (error) {
        console.error('Error fetching data count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataCount();
  }, [filter, brand, search]);
  const handleCurrentPageSearch = () => {
    {
      setCurrentPage(1)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(serchText);
  };

  const handleCurrentPage = (val) => {
    setCurrentPage(val);
  };

  const handleNextBtn = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevioustBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReset = () => {
    setSearchText("");
    setSearch("");
    setFilter("");
    setBrand("");
    setSort("");
  };


  console.log(allItems.result);



  return (
    <div className="pt-24 container mx-auto p-4">
      <div>
        <div className="flex flex-col lg:flex-row justify-center gap-2">
          <form
            onSubmit={handleSearch}
          >
            <div className="flex justify-between p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 md:w-1/2 lg:w-full">
              <input
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                value={serchText}
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Item name"
                aria-label="Item name"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>

          <div>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Food Category</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Salad">Salad</option>
              <option value="Sushi">Sushi</option>
              <option value="Mexican">Mexican</option>
              <option value="Thai">Thai</option>
              <option value="Indian">Indian</option>
              <option value="BBQ">BBQ</option>
              <option value="Japanese">Japanese</option>
              <option value="Greek">Greek</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>

          {/* brand  */}
          <div>
            <select
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              name="brand"
              id="brand"
              className="border p-4 rounded-lg"
            >
              <option value="">Restaurant Name</option>
              <option value="Pizza Palace">Pizza Palace</option>
              <option value="Burger King">Burger King</option>
              <option value="Fresh Greens">Fresh Greens</option>
              <option value="Sakura Sushi">Sakura Sushi</option>
              <option value="Taco Town">Taco Town</option>
              <option value="Thai Express">Thai Express</option>
              <option value="Curry House">Curry House</option>
              <option value="Burrito Brothers">Burrito Brothers</option>
              <option value="Grill Master">Grill Master</option>
              <option value="Middle East Feast">Middle East Feast</option>
              <option value="Tokyo Bites">Tokyo Bites</option>
              <option value="Greek Grill">Greek Grill</option>
              <option value="Cocktail Corner">Cocktail Corner</option>
            </select>
          </div>

          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              value={sort}
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Price</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </div>
          <button
            onClick={handleReset}
            className="btn bg-green-300 hover:bg-green-600 w-16"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
      </div>

      {loading ? (
        <Spinner />
      ) : !allItems || !allItems.result || allItems.result.length === 0 ? (
        <NoData />
      ) : (
        <div className="grid  lg:grid-cols-3 gap-6">
          {allItems.result.map((item) => (
            <MenuCard key={item._id} item={item} loading={loading} setLoading={setLoading} />
          ))}
        </div>
      )}




      <div className="md:mb-36  mb-8">
        <div className="flex justify-center mt-12">
          <button
            onClick={handlePrevioustBtn}
            className={`${allItems?.result?.length === 0 ? "hidden" : ""
              }  px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white`}
          >
            <div className="flex items-center -mx-1">

              <span className="mx-1">previous</span>
            </div>
          </button>

          {pages.map((btnNum) => (
            <button
              onClick={() => handleCurrentPage(btnNum)}
              key={btnNum}
              className={`hidden ${currentPage === btnNum ? "bg-blue-500 text-white" : undefined
                } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          <button
            onClick={handleNextBtn}
            className={` ${allItems?.result?.length === 0 ? "hidden" : ""
              } px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500`}
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManuePage;