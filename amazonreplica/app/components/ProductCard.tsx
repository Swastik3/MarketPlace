import Link from 'next/link';
import NextImage from 'next/image';
import {Image} from "@nextui-org/react";

import { Product } from "../../entities/Product";

interface ProductCardProps {
  product: Product;
}
function cleanImageUrl(imageUrl:string) {
  return imageUrl
    .replace(/^\["/, '') // Remove the leading [" characters
    .replace(/"\]$/, ''); // Remove the trailing "] characters
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className = 'flex items-center justify-center'>
          <Image
          as={NextImage}
          width={300}
          height={200}
          src={cleanImageUrl(product.images[0])}
          alt={product.title} 
          shadow='sm'
          isZoomed={true}
          fallbackSrc="https://api.api-ninjas.com/v1/randomimage?category=technology"
        />
        </div>
        <h3 className="text-center text-lg font-semibold mt-2">{product.title}</h3>
        <p className="text-center text-gray-600">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;