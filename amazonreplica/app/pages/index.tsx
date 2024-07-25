import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import CategoryNav from '../components/CategoryNav';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MyMarketplace - Home</title>
        <meta name="description" content="Welcome to MyMarketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto mt-8 flex-grow">
        <CategoryNav />
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;