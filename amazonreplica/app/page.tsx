import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
// import CategoryNav from './components/CategoryNav';
import OrmWrapper from "../lib/mikro-orm";
import { Product } from "../entities/Product";
type responseData = {
  allProducts: Product[];
  message: string
};


const HomePage: React.FC = async () => {
  let allProducts: Product[] = [];
  try {
    const response: Response = await fetch("http://localhost:3000/api/products", {cache : 'no-store'});
    const data: responseData = await response.json();
    console.log("The data fetched is this:", data.allProducts[0].description);
    allProducts = data.allProducts;
  } catch (e) {
    console.error("Error fetching the data", e);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MyMarketplace - Home</title>
        <meta name="description" content="Welcome to MyMarketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto mt-8 flex-grow">
        <h1 className="text-center text-3xl font-bold mb-4 ">Featured Products</h1>
        <ProductGrid allProducts={allProducts}/>
      </main>
      <Footer />
    </div>
  );
};

export default function Home() {
  return <HomePage />;
}
