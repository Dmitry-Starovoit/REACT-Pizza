import Categories from '../components/Categories/Categories';
import Pizza_Block from '../components/Pizza_Block/Pizza_Block';
import Skeleton from '../components/Pizza_Block/Skeleton';
import Sort from '../components/Sort/Sort';
import { useEffect, useState } from 'react';

function Home() {

  const [items, setItems] = useState([]);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://63727297025414c637100498.mockapi.io/items')
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

    return(
      <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : items.map((object) => <Pizza_Block key={object.id} {...object} />)}
          </div>
        </div>
      )}

export default Home;