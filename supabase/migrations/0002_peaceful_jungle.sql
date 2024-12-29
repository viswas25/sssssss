/*
  # Add sample clothing products

  1. New Data
    - Sample products in different categories
    - Product sizes and stock information
  
  2. Categories included:
    - Tops
    - Bottoms
    - Dresses
    - Outerwear
    - Accessories
*/

-- Insert sample products
INSERT INTO products (name, description, price, category, images) VALUES
  (
    'Classic White T-Shirt',
    'Essential cotton t-shirt perfect for everyday wear',
    29.99,
    'tops',
    ARRAY['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800']
  ),
  (
    'Slim Fit Jeans',
    'Comfortable stretch denim jeans with a modern fit',
    79.99,
    'bottoms',
    ARRAY['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800']
  ),
  (
    'Floral Summer Dress',
    'Light and breezy dress perfect for warm days',
    89.99,
    'dresses',
    ARRAY['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800']
  ),
  (
    'Wool Blend Coat',
    'Elegant winter coat that keeps you warm and stylish',
    199.99,
    'outerwear',
    ARRAY['https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800']
  ),
  (
    'Leather Tote Bag',
    'Spacious and stylish bag for all your essentials',
    149.99,
    'accessories',
    ARRAY['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800']
  );

-- Add sizes and stock for each product
INSERT INTO product_sizes (product_id, size, stock)
SELECT 
  p.id,
  s.size,
  FLOOR(RANDOM() * 50 + 10)::integer -- Random stock between 10-60
FROM products p
CROSS JOIN (
  SELECT unnest(ARRAY['XS', 'S', 'M', 'L', 'XL']) as size
) s
WHERE p.category != 'accessories';

-- Add one size for accessories
INSERT INTO product_sizes (product_id, size, stock)
SELECT 
  p.id,
  'ONE SIZE',
  FLOOR(RANDOM() * 50 + 10)::integer
FROM products p
WHERE p.category = 'accessories';