import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient">
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <main className="space-y-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
