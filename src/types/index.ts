export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  created_at: string;
  images: string[];
}

export interface ProductSize {
  id: string;
  product_id: string;
  size: string;
  stock: number;
}

export interface Order {
  id: string;
  user_id: string;
  status: string;
  total: number;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  size: string;
  quantity: number;
  price: number;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}