import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-800 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-center text-lg font-semibold mb-2">About Us</h3>
          <p className='text-center'>Your trusted online marketplace for all your shopping needs.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-center">Customer Service</h3>
          <ul>
            <li><Link href="#"><p className="hover:text-yellow-300 text-center">Contact Us</p></Link></li>
            <li><Link href="#"><p className="hover:text-yellow-300 text-center">FAQ</p></Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-center">My Account</h3>
          <ul>
            <li><Link href="#"><p className="hover:text-yellow-300 text-center">My Account</p></Link></li>
            <li><Link href="#"><p className="hover:text-yellow-300 text-center">Order History</p></Link></li>
          </ul>
        </div>
    
      </div>
      <div className="mt-4 text-center">
        <p className = 'text-sm'>&copy; 2024 Amazon-ish. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;