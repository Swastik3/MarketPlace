import { NextPage } from 'next';
// import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: NextPage<ProductDetailProps>= ({params}) => {
  // const router = useRouter();
  const id  = params.id;

  // In a real app, you'd fetch the product details based on the id
  const product = {
    id: id as string,
    name: 'Sample Product',
    price: 99.99,
    image: '/images/sample.jpg',
    description: 'This is a sample product description.',
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </main>
    </div>
  );
};

export default ProductDetail;