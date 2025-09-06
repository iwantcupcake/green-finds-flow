import { Product } from '@/contexts/CartContext';

export const categories = [
  'All Categories',
  'Clothing',
  'Electronics',
  'Books',
  'Home & Garden',
  'Sports & Outdoors',
  'Toys & Games',
  'Furniture',
  'Art & Crafts'
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Vintage Leather Jacket',
    description: 'Beautiful vintage leather jacket in excellent condition. Perfect for eco-conscious fashion lovers.',
    category: 'Clothing',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    userId: '2',
    userName: 'Sarah Johnson',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'MacBook Air 2019',
    description: 'Gently used MacBook Air in great condition. Includes charger and original box.',
    category: 'Electronics',
    price: 750,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    userId: '3',
    userName: 'Mike Chen',
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Collection of Classic Books',
    description: 'Set of 20 classic literature books. Perfect for book lovers and sustainable reading.',
    category: 'Books',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    userId: '4',
    userName: 'Emma Davis',
    createdAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Handmade Ceramic Planters',
    description: 'Set of 3 beautiful handmade ceramic planters. Great for your sustainable garden.',
    category: 'Home & Garden',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
    userId: '5',
    userName: 'Alex Green',
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'Yoga Mat Set',
    description: 'Eco-friendly yoga mat with carrying strap and blocks. Barely used.',
    category: 'Sports & Outdoors',
    price: 28,
    imageUrl: 'https://images.unsplash.com/photo-1506629905607-92902d253ec0?w=500&h=500&fit=crop',
    userId: '6',
    userName: 'Lisa Park',
    createdAt: '2024-01-11'
  },
  {
    id: '6',
    title: 'Wooden Coffee Table',
    description: 'Solid wood coffee table with natural finish. Perfect for sustainable living.',
    category: 'Furniture',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    userId: '7',
    userName: 'David Kim',
    createdAt: '2024-01-10'
  }
];

export const purchaseHistory: Product[] = [
  {
    id: '101',
    title: 'Organic Cotton T-Shirts',
    description: 'Pack of 3 organic cotton t-shirts in various colors.',
    category: 'Clothing',
    price: 32,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    userId: '8',
    userName: 'Tom Wilson',
    createdAt: '2024-01-08'
  },
  {
    id: '102',
    title: 'Recycled Notebook Set',
    description: 'Set of 5 notebooks made from recycled paper.',
    category: 'Books',
    price: 18,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    userId: '9',
    userName: 'Anna Taylor',
    createdAt: '2024-01-05'
  }
];