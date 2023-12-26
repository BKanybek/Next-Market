import React from 'react';
import { Product } from '../../Utils/types';

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {

    console.log(cart, 'cart');
    

    
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;