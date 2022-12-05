import React, { useState } from 'react';

const Categories = ({ setActiveCategories, activeCategories }) => {
  const categories = ['Всі', 'Мясні', 'Вегетаріанска', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveCategories(i)}
            className={activeCategories === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
