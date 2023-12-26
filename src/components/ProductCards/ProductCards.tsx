
import React from 'react';
import { Product } from '../../Utils/types';
import styles from './productCard.module.scss';
import { useCartContext } from '@/cartContext/CartContext';

interface ProductCardProps {
  products: Product[];
  addToCart: (product: Product) => void;
  selectedCategory: string | null;
}

const ProductCards: React.FC<ProductCardProps> = ({ products, addToCart, selectedCategory }) => {
  const { cart } = useCartContext();

  const isProductInCart = (productId: number) => {
    return cart.some((product) => product.id === productId);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className={styles.cardWrapper}>
      {filteredProducts.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p className={styles.text}>{product.description}</p>
          <p className={styles.price}>{`Цена: $${product.price.toFixed(2)}`}</p>
          <button
            onClick={() => addToCart(product)}
            className={isProductInCart(product.id) ? styles.remove : styles.add}
          >
            {isProductInCart(product.id) ? 'Убрать из корзины' : 'Добавить в корзину'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
