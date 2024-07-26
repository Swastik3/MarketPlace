import Link from 'next/link';
import SearchBar from './SearchBar';
import Cart from './Cart';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-bold">MyMarketplace</p>
        </Link>
        <SearchBar />
        <Cart />
      </div>
    </header>
  );
};

export default Header;