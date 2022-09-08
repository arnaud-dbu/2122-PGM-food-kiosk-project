import { createContext } from 'react';
import { API_CATEGORIES_URL } from '../data/api/api';
import useFetch from '../hooks/useFetch';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [dataCategories] = useFetch(API_CATEGORIES_URL);

  return <CategoryContext.Provider value={{ dataCategories }}>{children}</CategoryContext.Provider>;
}

export default CategoryContext;
