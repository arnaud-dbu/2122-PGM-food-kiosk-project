import { createContext, useState } from 'react';
import { API_MENU_URL } from '../data/api/api';
import useFetch from '../hooks/useFetch';

const DishContext = createContext();

export function DishProvider({ children }) {
  const [dataDishes] = useFetch(API_MENU_URL);
  const [dishes, setDishes] = useState([]);

  return (
    <DishContext.Provider value={{ dishes, setDishes, dataDishes }}>
      {children}
    </DishContext.Provider>
  );
}

export default DishContext;
