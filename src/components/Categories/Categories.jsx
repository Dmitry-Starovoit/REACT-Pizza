import React, { useState } from 'react';

const Categories = () => {

  const [active, setActive] = useState(0);
  
  const addActive = (index) => {
    setActive(index)
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => addActive(0)} className={active === 0 ? 'active' : ''}>Всі</li>
        <li onClick={() => addActive(1)} className={active === 1 ? 'active' : ''}>Мясні</li>
        <li onClick={() => addActive(2)} className={active === 2 ? 'active' : ''}>Вегетаріанска</li>
        <li onClick={() => addActive(3)} className={active === 3 ? 'active' : ''}>Гриль</li>
        <li onClick={() => addActive(4)} className={active === 4 ? 'active' : ''}>Гострі</li>
        <li onClick={() => addActive(5)} className={active === 5 ? 'active' : ''}>Закриті</li>
      </ul>
    </div>
  );
};

export default Categories;