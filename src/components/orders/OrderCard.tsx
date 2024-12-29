import React from 'react';
import { Order } from '../../types';
import { formatDate } from '../../utils/date';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-600">Order #{order.id.slice(0, 8)}</p>
          <p className="text-sm text-gray-600">{formatDate(order.created_at)}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-medium capitalize" 
          style={{
            backgroundColor: getStatusColor(order.status),
            color: 'white'
          }}>
          {order.status}
        </span>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'pending':
      return '#F59E0B';
    case 'processing':
      return '#3B82F6';
    case 'shipped':
      return '#10B981';
    case 'delivered':
      return '#059669';
    default:
      return '#6B7280';
  }
}