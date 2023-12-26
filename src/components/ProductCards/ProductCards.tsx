// components/ProductCards.tsx
import React from 'react';
import { Product } from '../../Utils/types';
import styles from './productCard.module.scss'

interface ProductCardProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductCards: React.FC<ProductCardProps> = ({ products, addToCart  }) => {
  return (
    <div className={styles.cardWrapper}>
      {products.map(product => (
        <div key={product.id} className={styles.card}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{`Цена: $${product.price.toFixed(2)}`}</p>
          <button onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
