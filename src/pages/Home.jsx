import React from 'react';
import ProductsSection from '../components/ProductsSection';
import Counter from "../Counter"

export default function Home() {
  return (
    <>
      <div>
        <ProductsSection />
        <Counter />
      </div>

    </>
  );
}