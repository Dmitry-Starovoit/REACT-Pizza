import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Pizza_Block from './components/Pizza_Block/Pizza_Block';
import Sort from './components/Sort/Sort';
import './scss/app.scss';
import pizzas from './assets/pizzas.json';

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {pizzas.map((object) => (
              <Pizza_Block {...object} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
