import Link from 'next/link';
import NextImage from 'next/image';
import {Image} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import { Product } from "../../types/Product";

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
    <div className='flex flex-col justify-between'>
    <div className="h-[100%] border rounded-lg p-4 hover:shadow-2xl transition-shadow">
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
    <Button  radius="sm" className="w-[100%] bg-yellow-500 text-white px-4 py-2  hover:bg-yellow-600">
          Add to Cart
    </Button>
    </div>
  );
};

export default ProductCard;