import { supabase } from './supabase';
import { CartItem } from '../types';

export async function createOrder(items: CartItem[], shippingDetails: any) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Start a transaction
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      total,
      status: 'pending',
      shipping_details: shippingDetails
    })
    .select()
    .single();

  if (orderError) throw orderError;

  // Create order items
  const orderItems = items.map(item => ({
    order_id: order.id,
    product_id: item.product.id,
    size: item.size,
    quantity: item.quantity,
    price: item.product.price
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems);

  if (itemsError) throw itemsError;

  // Update product stock
  for (const item of items) {
    const { error: stockError } = await supabase.rpc('update_product_stock', {
      p_product_id: item.product.id,
      p_size: item.size,
      p_quantity: item.quantity
    });

    if (stockError) throw stockError;
  }

  return order;
}