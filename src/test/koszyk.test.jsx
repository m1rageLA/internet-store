import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CheckoutItem from '../CheckoutItem';
import Checkout from '../Checkout';

const removeFromCartMock = vi.fn();

vi.mock('../context/CartContext', () => ({
  useCart: () => ({
    products: [
      { id: 1, title: 'Product 1', price: 50, amount: 2, image: '' },
      { id: 2, title: 'Product 2', price: 30, amount: 1, image: '' }
    ],
    removeFromCart: removeFromCartMock
  })
}));

describe('CheckoutItem Component', () => {
  it('renders item with given props', () => {
    render(
      <CheckoutItem
        price={99.99}
        title="Test Product"
        description="This is a test product"
        category="Test Category"
        image="https://example.com/image.jpg"
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('99.99 zł')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();

    const img = screen.getByAltText('Test Product');
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});

describe('Checkout Component', () => {
  it('renders list of products and total price', () => {
    render(<Checkout />);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Suma:')).toBeInTheDocument();

    expect(screen.getByText((text) => text.includes('130.00'))).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /zamawiam/i })).toBeInTheDocument();
  });

  it('calls removeFromCart when delete button is clicked', () => {
    render(<Checkout />);

    const deleteButtons = screen.getAllByRole('button', { hidden: true });
    fireEvent.click(deleteButtons[0]);

    expect(removeFromCartMock).toHaveBeenCalledWith(1);
  });
});
