import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/cartStore';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';
import { createOrder } from '../lib/orders';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(shippingDetails: any) {
    try {
      setLoading(true);
      const order = await createOrder(items, shippingDetails);
      clearCart();
      navigate(`/orders/${order.id}`);
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CheckoutForm onSubmit={handleSubmit} loading={loading} />
        <OrderSummary items={items} total={total()} />
      </div>
    </div>
  );
}