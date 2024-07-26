import React from 'react';
import ProductCard from './ProductCard';
import { Product } from "../../types/Product";

const generateRandomKey = () => {
  return Math.random().toString(36).substring(2, 15);
};
const ProductGrid: React.FC<{ allProducts: Product[] }> = async ({ allProducts }) => {

  return (
  <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {allProducts && allProducts.map((product) => (
    <ProductCard key={generateRandomKey()} product={product} />
    ))}
  </div>
  );
};

export default ProductGrid;