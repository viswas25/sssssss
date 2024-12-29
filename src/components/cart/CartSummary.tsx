import React from 'react';

interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

export default function CartSummary({ total, onCheckout }: CartSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t pt-2 font-semibold">
          <div className="flex justify-between">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full bg-black text-white text-center py-3 rounded-md hover:bg-gray-800"
      >
        Pay Now
      </button>
    </div>
  );
}