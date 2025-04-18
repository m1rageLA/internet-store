import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Produkty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.title} product={p} />
        ))}
      </div>
    </section>
  );
}
