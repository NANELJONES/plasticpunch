"use client"
import React, { useState } from 'react'
import { categories } from '@/app/Data/Data'

const Categories = () => {
  const [active, setActive] = useState("")
  
  return (
    <div className='sticky top-2 py-6 rounded-lg bg-white'>
      <h5>Categories</h5>
      <div className='flex mt-4 gap-2'>
        {categories.data.categoriesConnection.edges.map((each_category, index) => {
          return (
            <p
              onClick={() => {
                setActive(each_category?.node?.category);
              }}
              key={index}
              className={`${
                active === each_category?.node?.category
                  ? 'bg-primary_color text-white'
                  : ' border border-primary_color'
              } p-4 rounded-lg cursor-pointer`}
            >
              {each_category?.node?.category}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
