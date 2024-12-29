import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      <div className="h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to StyleStore</h1>
            <p className="text-xl mb-8">Discover the latest fashion trends</p>
            <Link
              to="/products"
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}