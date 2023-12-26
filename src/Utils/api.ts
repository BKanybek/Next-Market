import { Product } from './types';

const API = 'https://dummyjson.com/products';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data: string[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};