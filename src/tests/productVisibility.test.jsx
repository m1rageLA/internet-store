import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../useCart', () => {
  return {
    default: () => ({
      addToCart: vi.fn(), // мок метода
    }),
  };
});



describe('ProductCard', () => {
  it('отображает название и изображение продукта', () => {
    render(
      <ProductCard
        id={1}
        title="Test Product"
        description="Описание"
        category="Test"
        image="https://via.placeholder.com/150"
        price={99.99}
      />
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
