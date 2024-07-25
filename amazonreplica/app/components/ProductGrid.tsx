import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

// Mock data - replace with actual data fetching in a real application
const products: Product[] = [
  { id: '1', name: 'Product 1', price: 19.99, image: '/images/product1.jpg', description: 'Description 1' },
  { id: '2', name: 'Product 2', price: 29.99, image: '/images/product2.jpg', description: 'Description 2' },
  { id: '3', name: 'Product 3', price: 39.99, image: '/images/product3.jpg', description: 'Description 3' },
  // Add more products as needed
];

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;