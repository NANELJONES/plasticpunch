"use client";
import React, { useState, useEffect } from 'react';
import { categories } from '@/app/Data/Data';
import { useRouter } from 'next/navigation';
import { getCategories } from '@/app/api/blog';
import { getBlogFromCategory } from '@/app/api/blog';
import { useStateContext } from '@/app/Context/StateContext';

const Categories = () => {
  const [active, setActive] = useState("All");
  const [categories, setCategories] = useState([]);
  const { fetchblog, setblog } = useStateContext();
  const router=  useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response);
    };
    fetchCategories();
  }, []);



  const fetchCate = async (category) => {
    const response = await getBlogFromCategory(category);
    console.log("This is the data fetched based on Category:", response);
    setblog((prev) => ({
      ...prev,
      data: response, // Directly replace the existing data with the new response
      pageInfo: { hasNextPage: false, endCursor: null }, // Reset pagination if needed
    }));
  };

  const handleAllClick = () => {
    setActive("All");
    router.push('/blog')
    
    fetchblog(); // Call fetchblog without arguments since it uses the context's state
  };

  return (
    <div className='py-6 rounded-lg bg-white'>
      <h5>Categories</h5>
      <div className='flex mt-4 gap-2'>
        <p
          onClick={handleAllClick}
          className={`${
            active === "All"
              ? 'bg-primary_color text-white'
              : ' border border-primary_color'
          } p-4 rounded-lg cursor-pointer`}
        >
          All Blog & News
        </p>
        {categories.map((each_category, index) => {
          return (
            <p
              onClick={() => {
                setActive(each_category?.node?.category);
                fetchCate(each_category?.node?.category);
              }}
              key={index}
              className={`${
                active === each_category?.node?.category
                  ? 'bg-primary_color text-white'
                  : ' border border-primary_color'
              } p-4 rounded-lg cursor-pointer`}
            >
              {each_category.node.category}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;