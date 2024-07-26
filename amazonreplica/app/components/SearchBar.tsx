'use client';
import React, { useState } from 'react';
import {Button} from '@nextui-org/button'; 

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="text-gray-700 w-[40vw] px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-gray-100 px-4 py-2 rounded-r-md hover:bg-yellow-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;