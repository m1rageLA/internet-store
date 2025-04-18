import React from 'react';
import Header from './Header';
import SidePanel from './SidePanel';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans w-full">
      <Header />
      <div className="flex flex-1 w-full gap-6 px-4 py-6">
        <main className="flex-1">{children}</main>
        <SidePanel />
      </div>
      <Footer />
    </div>
  );
}
