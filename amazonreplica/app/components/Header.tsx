import Link from 'next/link';
import SearchBar from './SearchBar';
import Cart from './Cart';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-800 text-white p-4 sm:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Link href="/">
          <p className="text-xl sm:text-2xl font-bold">Amazon-ish</p>
        </Link>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <SearchBar />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;