// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <Head>
        <title>MyMarketplace - Home</title>
        <meta name="description" content="Welcome to MyMarketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto mt-8 flex-grow ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
