import Categories from '../components/Categories/Categories';
import Pizza_Block from '../components/Pizza_Block/Pizza_Block';
import Skeleton from '../components/Pizza_Block/Skeleton';
import Sort from '../components/Sort/Sort';
import { useEffect, useState } from 'react';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [activeCategories, setActiveCategories] = useState(0);
  const [items, setItems] = useState([]);
  const [activeSort, setActiveSort] = useState({ name: 'популярності', sortProperty: 'rating' });

  const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sort = activeSort.sortProperty.replace('-', '');
  const category = activeCategories > 0 ? `category=${activeCategories}` : '';

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://63727297025414c637100498.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`,
    )
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
    window.scroll(0, 0);
  }, [activeCategories, activeSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategories={activeCategories}
          setActiveCategories={(i) => setActiveCategories(i)}
        />
        <Sort value={activeSort} onChangeSort={(i) => setActiveSort(i)} />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((object) => <Pizza_Block key={object.id} {...object} />)}
      </div>
    </div>
  );
}

export default Home;
