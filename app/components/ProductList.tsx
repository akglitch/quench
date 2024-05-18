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
            <div key={product.id} className="group relative rounded-md overflow-hidden bg-gray-200 w-64">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-32 sm:h-40 object-contain"
              />
              <div className="p-2 sm:p-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-2 text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
