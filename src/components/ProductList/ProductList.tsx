
"use client"

// ProductList.tsx
import React, { useState, useEffect } from 'react';
import { Product } from '../../Utils/types';
import { getProducts, getCategories } from '../../Utils/api';
import ProductCards from '../ProductCards/ProductCards';
import Categories from '../Categories/Categories'; // Импорт нового компонента
import styles from './productList.module.scss';
import { useCartContext } from '@/cartContext/CartContext';

const ProductList: React.FC = () => {
    const { cart, addToCart } = useCartContext();
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isCategoryShow, setCategoryShow] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData: any = await getProducts();
                if (productData && productData.products) {
                    setProducts(productData.products);
                } else {
                    console.error('Неверный формат данных для продуктов:', productData);
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <>
            {selectedCategory && (
                <div className={styles.selectCategory}>
                    <span><b>выбранная категория:</b> {selectedCategory}</span>
                </div>
            )}
            <div className={styles.list}>
                {!isCategoryShow && <button className={styles.categoryBtn} onClick={() => setCategoryShow(!isCategoryShow)}>
                    Категории
                </button>}
                <Categories onSelectCategory={handleSelectCategory} setCategoryShow={setCategoryShow} isCategoryShow={isCategoryShow} />
                <ProductCards products={products} addToCart={addToCart} selectedCategory={selectedCategory} />
            </div>
        </>

    );
};

export default ProductList;
