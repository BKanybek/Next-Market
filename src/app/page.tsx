import { Navbar } from '@/components/Navbar/Navbar'
import styles from './page.module.css'
import { Footer } from '@/components/Footer/Footer'
import ProductList from '@/components/ProductList/ProductList'
import { CartProvider } from '@/cartContext/CartContext'

export default function Home() {
  return (
    <CartProvider>
      <main className={styles.main}>
        <Navbar/>
        <ProductList/>
        <Footer/>
      </main>
    </CartProvider>
  )
}
