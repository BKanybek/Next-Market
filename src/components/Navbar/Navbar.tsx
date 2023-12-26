"use client"

import React from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useCartContext } from '@/cartContext/CartContext';


export const Navbar = () => {
  const { cart } = useCartContext();



  return (
    <nav className={styles.container}>
      <Link href='/'>
        <Image src='/react.png' alt='' width={50} height={50} />
      </Link>
      <div className={styles.cartContainer} >
        <Link href='/cart'>
          <img src='/cart.png' alt='' width={40} height={40} />
          {cart.length > 0 && <p className={styles.itemCount}>{cart.length}</p>}
        </Link>
      </div>
    </nav>
  )
}
