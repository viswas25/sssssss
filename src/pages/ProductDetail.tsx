import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Product, ProductSize } from '../types';
import { useCartStore } from '../stores/cartStore';
import ProductImages from '../components/product/ProductImages';
import ProductInfo from '../components/product/ProductInfo';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [sizes, setSizes] = useState<ProductSize[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    loadProduct();
  }, [id]);

  async function loadProduct() {
    try {
      setLoading(true);
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (productError) throw productError;

      const { data: sizesData, error: sizesError } = await supabase
        .from('product_sizes')
        .select('*')
        .eq('product_id', id);

      if (sizesError) throw sizesError;

      setProduct(productData);
      setSizes(sizesData);
    } catch (error) {
      console.error('Error loading product:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImages images={product.images} name={product.name} />
        <ProductInfo
          product={product}
          sizes={sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          onAddToCart={() => {
            if (selectedSize) {
              addItem({
                product,
                size: selectedSize,
                quantity: 1,
              });
            }
          }}
        />
      </div>
    </div>
  );
}