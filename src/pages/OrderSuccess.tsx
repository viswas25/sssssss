import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccess() {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order #{orderId?.slice(0, 8)} has been confirmed.
        </p>
        <div className="space-x-4">
          <Link
            to="/orders"
            className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
          >
            View Orders
          </Link>
          <Link
            to="/products"
            className="inline-block border border-black text-black px-6 py-2 rounded-md hover:bg-gray-50"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}