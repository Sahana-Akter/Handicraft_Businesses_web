import React from 'react';
import { Link } from 'react-router-dom';

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={business.logoUrl} alt={business.name} className="w-full h-32 object-cover rounded mb-4" />
      <h3 className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">{business.name}</h3>
      <p className="text-gray-600 dark:text-gray-400">Years: {business.years}</p>
      <p className="text-gray-600 dark:text-gray-400">Products: {business.products}</p>
      <p className="text-gray-600 dark:text-gray-400">Likes: {business.likes}</p>
      <Link to={`/business/${business.id}`} className="mt-4 inline-block bg-blue-600 dark:bg-blue-700 text-white dark:text-gray-200 px-4 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600">
        View Products
      </Link>
    </div>
  );
};

export default BusinessCard;
