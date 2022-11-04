import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Pizza_Block from './components/Pizza_Block/Pizza_Block';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

function App(props) {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <Pizza_Block
              title="Карбонара"
              price="194 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2020/05/Karbonara.jpg"
            />
            <Pizza_Block
              title="Гавайская"
              price="187 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/07/Gavajska.jpg"
            />
            <Pizza_Block
              title="Салями"
              price="167 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/06/Salyami.jpg"
            />
            <Pizza_Block
              title="Маргарита"
              price="134 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/06/Margarita-1.jpg"
            />
            <Pizza_Block
              title="4 сыра"
              price="237 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/05/4sira.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
