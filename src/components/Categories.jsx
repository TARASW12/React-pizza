import React, { useState } from 'react';
import { usePizzaContext } from '../context';

function Categories({ setCategories, filter }) {
  // const [active, setActive] = useState(0);
  const categories = ['Все', 'Meat', 'Vegeyarians', 'Grill', 'Strong', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categori, index) => (
          <li
            key={index}
            onClick={() => setCategories(index)}
            className={filter === index ? 'active' : ''}>
            {categori}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
