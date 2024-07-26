import React from 'react';
import ProductCard from './ProductCard';
import { Product } from "../../entities/Product";

type responseData = {
  allProducts: Product[];
  message: string
};


const ProductGrid: React.FC<{ allProducts: Product[] }> = async ({ allProducts }) => {
  
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {allProducts && allProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
    ))}
  </div>
  );
};

export default ProductGrid;