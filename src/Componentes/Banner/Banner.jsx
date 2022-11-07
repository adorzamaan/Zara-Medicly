import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='bg-image'>
           <div className='container mx-auto flex justify-center items-center text-center'>
          <div className='py-44'>
          <h1 className='font-bold text-white lg:text-3xl md:text-sm sm:text-sm'>Dr. Zara Binte Aysha</h1>
            <h6 className='text-gray-200 font-medium pt-1 pb-4'>Specialized in Plustic Surgery</h6>
            <button className='bg-custom px-6 py-1 mr-4 text-white'>Book Appoinment</button>
            <button className='border border-blue-600 px-6 py-1 text-white mt-3'>Get Special Offer</button>
          </div>
           </div>
        </div>
    );
};

export default Banner;