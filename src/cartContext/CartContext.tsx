"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../Utils/types';

interface CartContextProps {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const updateCart = (newCart: Product[]) => {
        setCart(newCart);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const addToCart = (product: Product) => {
        const existingProduct = cart.find((p) => p.id === product.id);

        if (existingProduct) {
            const updatedCart = cart.filter((p) => p.id !== product.id);
            updateCart(updatedCart);
        } else {
            const updatedCart = [...cart, product];
            updateCart(updatedCart);
        }
    };

    const removeFromCart = (productId: number) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        updateCart(updatedCart);
    };

    const clearCart = () => {
        updateCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
