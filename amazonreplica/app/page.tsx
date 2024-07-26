import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
// import CategoryNav from './components/CategoryNav';
import OrmWrapper from '../lib/mikro-orm';
import { Product } from '../entities/Product';


// export const getServerSideProps: GetServerSideProps = async () => {
//   const orm = await OrmWrapper.getInstance();
//   const em = orm.em.fork();

//   const products = await em.find(Product, {});

//   return {
//     props: {
//       products: products.map(u => ({ ...u })),
//     },
//   };
// };

const HomePage: React.FC = async() => {
  // console.log(products);
  const orm = await OrmWrapper.getInstance();
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MyMarketplace - Home</title>
        <meta name="description" content="Welcome to MyMarketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto mt-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default function Home() {
  return (
      <HomePage/>
  );
}