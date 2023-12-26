
"use client"

// components/ProductList.tsx
import React, { useState, useEffect } from 'react';
import { Product } from '../../Utils/types';
import ProductCards from '../ProductCards/ProductCards';
import { getProducts } from '../../Utils/api';
import styles from './productList.module.scss'
import { useCart } from '@/cartContext/CartContext';

const ProductList: React.FC = () => {
    const { cart, addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); 

  console.log(cart, 'CART');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getProducts(); // Здесь используем any для data
        if (data && data.products) {
          setProducts(data.products);
          setCategories(data.products.category)
        } else {
          console.error('Неверный формат данных:', data);
        }
      } catch (error) {
        console.error('Ошибка при получении:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className={styles.list}>
      <ProductCards products={products} addToCart={addToCart}/>
    
    </div>
  );
};


export default ProductList;
