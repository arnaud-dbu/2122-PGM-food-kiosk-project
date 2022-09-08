import React, { useContext, useRef, useState } from 'react';
import { CategoryContainer, Category } from './Categories.style';
import DishContext from '../../contexts/DishContext';
import CategoryContext from '../../contexts/CategoryContext';
import useArrayRef from '../../hooks/useArrayRef';
import { useLayoutEffect } from 'react';
import useAnimations from '../../hooks/useAnimations';

const Categories = () => {
  // * CACHE ELEMENTS * //
  const { setDishes, dataDishes } = useContext(DishContext);
  const { dataCategories, categories } = useContext(CategoryContext);
  const [categoryRefs, setCategoryRef] = useArrayRef();
  const { staggerFromLeftAnimation } = useAnimations();
  const [active, setActive] = useState('Combos');

  // * GENERATE DISHES * //
  const handleCategory = (category) => {
    // Select all dishes by category name
    const filterItems = dataDishes.filter((d) => d.category === category);
    // Add filtered items to [dishes]
    setDishes(() => filterItems);
    // Set category button active when triggered
    setActive(category);
  };

  // * ANIMATIONS * //
  //   Start animation
  useLayoutEffect(() => {
    staggerFromLeftAnimation(categoryRefs.current, 0.1, { x: -400, ease: 'elastic.out(1, 5)' });
  }, [categories]);

  return (
    <CategoryContainer>
      {dataCategories &&
        dataCategories.map((c) => (
          <Category
            ref={setCategoryRef}
            className={active === c.name ? 'active' : ''}
            key={c.id}
            onClick={() => handleCategory(c.name)}>
            <img src={require(`../../assets/images/${c.image}`)} alt="" />
            <span>{c.name}</span>
          </Category>
        ))}
    </CategoryContainer>
  );
};

export default Categories;
