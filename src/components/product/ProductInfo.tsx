import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, ProductSize } from '../../types';
import { useCartStore } from '../../stores/cartStore';

interface ProductInfoProps {
  product: Product;
  sizes: ProductSize[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export default function ProductInfo({
  product,
  sizes,
  selectedSize,
  onSizeChange,
}: ProductInfoProps) {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart() {
    if (!selectedSize) return;
    addItem({
      product,
      size: selectedSize,
      quantity: 1,
    });
  }

  function handleBuyNow() {
    if (!selectedSize) return;
    addItem({
      product,
      size: selectedSize,
      quantity: 1,
    });
    navigate('/checkout');
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-2xl font-bold text-gray-900 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div>
        <h2 className="text-sm font-medium text-gray-900">Description</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>

      <div>
        <h2 className="text-sm font-medium text-gray-900">Select Size</h2>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {sizes.map((size) => (
            <button
              key={size.size}
              onClick={() => onSizeChange(size.size)}
              disabled={size.stock === 0}
              className={`py-2 px-4 text-sm font-medium rounded-md ${
                selectedSize === size.size
                  ? 'bg-black text-white'
                  : size.stock === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {size.size}
              {size.stock === 0 && ' (Out of Stock)'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className="flex-1 bg-white border-2 border-black text-black py-3 px-8 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          disabled={!selectedSize}
          className="flex-1 bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}