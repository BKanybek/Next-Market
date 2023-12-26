"use client"

import React from 'react';
import { useCartContext } from '@/cartContext/CartContext';
import styles from './cart.module.scss'
import Image from 'next/image';
import Link from 'next/link';



const Cart: React.FC = () => {
    const { cart, clearCart, removeFromCart } = useCartContext();

    const handleClearCart = () => {
        clearCart();
    };

    const handleRemoveFromCart = (productId: number) => {
        removeFromCart(productId);
    };


    return (
        <div className={styles.cartContainer}>
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div className={styles.cartWrapper}>
                    <ul className={styles.cartList}>
                        {cart.map((product) => (
                            <li key={product.id} className={styles.cartItem}>
                                <img className={styles.cartImg} src={product.thumbnail} alt={product.title} />
                                <div className={styles.productDetails}>
                                    <span className={styles.productTitle}>{product.title}</span>
                                    <span className={styles.productPrice}>{product.price.toFixed(2)} сом</span>
                                </div>
                                <span>{product.description}</span>
                                <div className={styles.btn} onClick={() => handleRemoveFromCart(product.id)}>
                                    <Image src='/delete.png' alt='' width={20} height={20}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
            <div className={styles.btnWrapper}>
                <Link href='/'>
                    <button className={styles.btn1}>Продолжить покупки</button>
                </Link>
                {cart.length === 0 || <button className={styles.btn2} onClick={handleClearCart}>Очистить корзину</button>}
            </div>
        </div>
    );
};

export default Cart;