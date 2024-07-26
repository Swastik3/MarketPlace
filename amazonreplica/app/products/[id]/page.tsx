import { NextPage } from 'next';
import Header from '../../components/Header';
import {Button, Image} from '@nextui-org/react'
import { Product } from '@/entities/Product';
import ImageComponent from './ImageComponent';
import Footer from '@/app/components/Footer';
interface ProductDetailProps {
  params: {
    id: string;
  };
}



type responseData = {
  product: Product;
  message: string
};

const ProductDetail: NextPage<ProductDetailProps>= async ({params}) => {
  const id  = params.id;
  // console.log("The id is:", id);
  let product: Product | undefined = undefined;
  try {
    const response: Response = await fetch(`http://localhost:3000/api/products/${id}`, {cache : 'no-store'});
    const data: responseData = await response.json();
    console.log("The data fetched is this:", data.product);
    product = data.product;
  } catch (e) {
    console.error("Error fetching the data", e);
  }


  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="relative w-full h-[60vh] flex justify-center items-center">
              <ImageComponent product={product}/>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8 flex-col justify-center items-center">
              <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
              <p className="text-2xl font-semibold text-yellow-600 mb-4">
                ${product?.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-6">{product?.description}</p>
              <div className='flex justify-center'><Button radius = "md" className="w-[80%] bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105">
                Add to Cart
              </Button></div>
            </div>
          </div>
        </div>

      </main>
      <Footer/>
    </div>
  );
};

export default ProductDetail;