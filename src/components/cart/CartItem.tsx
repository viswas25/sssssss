import React from 'react';
import { useCartStore } from '../../stores/cartStore';
import { CartItem as CartItemType } from '../../types';
import { Trash2, Minus, Plus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={item.product.images[0]}
          alt={item.product.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{item.product.name}</h3>
          <p className="text-gray-600">Size: {item.size}</p>
          <p className="font-semibold">${item.product.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.product.id, item.size, Math.max(1, item.quantity - 1))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => removeItem(item.product.id, item.size)}
          className="p-2 text-gray-500 hover:text-red-500"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}