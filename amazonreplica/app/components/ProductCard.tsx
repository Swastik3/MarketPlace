import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
          <Image src={product.image} alt={product.name} width={200} height={200} />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;