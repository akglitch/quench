"use client";
import React from 'react';
import { products } from '../utils/ListData';

const ProductList: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recommended</h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="group relative rounded-md overflow-hidden  w-64 flex flex-col">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-32 sm:h-40 object-contain"
              />
              <div className="p-2 sm:p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="mt-2 text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <button type="button" className="mt-4 text-white bg-gray-700 focus:ring-inherit focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
