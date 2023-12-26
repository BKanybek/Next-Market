import React from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/cartContext/CartContext';


export const Navbar = () => {
  
  
  return (
    <nav className={styles.container}>
      <Image src='/react.png' alt='' width={50} height={50}/>
      <span>Сумма заказа: 1500</span>
      <div className={styles.cartContainer} >
        <Link href='/cart'>
          <Image src='/cart.png' alt='' width={40} height={40} />
        </Link>
      </div>
    </nav>
  )
}
