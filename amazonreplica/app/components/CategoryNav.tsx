import React from 'react';
import Link from 'next/link';

const categories = [
  'Electronics',
  'Books',
  'Clothing',
  'Home & Garden',
  'Toys',
];

const CategoryNav: React.FC = () => {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category.toLowerCase().replace(' & ', '-')}`}>
              <p className="text-blue-500 hover:text-blue-700">{category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;