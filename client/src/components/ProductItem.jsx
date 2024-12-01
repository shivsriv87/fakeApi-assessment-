import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white py-1 px-3 rounded-full text-xs">
          {product.category}
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-xl font-semibold text-gray-900 truncate">{product.title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{product.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="font-bold text-lg text-gray-800">${product.price}</p>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
