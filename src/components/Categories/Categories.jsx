import React, { useState } from 'react';

const Categories = () => {

  const [active, setActive] = useState(0);
  
  const categories = ['Всі', 'Мясні', 'Вегетаріанска', 'Гриль', 'Гострі', 'Закриті']

  const addActive = (index) => {
    setActive(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => 
          <li onClick={() => addActive(i)} className={active === i ? 'active' : ''}>{value}</li>
        )}
      </ul>
    </div>
  );
};

export default Categories;