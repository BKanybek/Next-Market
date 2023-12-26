// Categories.tsx
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../Utils/api';
import styles from './categories.module.scss'

interface CategoriesProps {
    onSelectCategory: (category: string) => void;
    setCategoryShow: React.Dispatch<React.SetStateAction<boolean>>;
    isCategoryShow: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ onSelectCategory, setCategoryShow, isCategoryShow }) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData: string[] = await getCategories();
                setCategories(categoryData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category: string) => {
        onSelectCategory(category);
        setActiveCategory(category);
    };

    const handleClearClick = () => {
        onSelectCategory('');
        setActiveCategory(null);
    };

    return (
        <div className={`${styles.container} ${isCategoryShow ? styles.show : styles.hide}`}>
            <h2>Категории:</h2>
            <div className={styles.category}>
                {categories.slice(0, 5).map((category, index) => (
                    <div
                        className={`${styles.items} ${activeCategory === category ? styles.active : ''}`}
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <button className={styles.clearButton} onClick={handleClearClick}>
                Очистить
            </button>
            <div className={styles.categoryClose} onClick={() => setCategoryShow(false)}>X</div>
        </div>
    );
};

export default Categories;