import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">StyleStore</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/products" className="hover:text-gray-600">Shop</Link>
            <Link to="/cart" className="relative hover:text-gray-600">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/auth" className="hover:text-gray-600">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}