import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Pizza_Block from './components/Pizza_Block/Pizza_Block';
import Sort from './components/Sort/Sort';
import './scss/app.scss';

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
            <Pizza_Block
              title="Карбонара"
              price="194 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2020/05/Karbonara.jpg"
            />
            <Pizza_Block
              title="Гавайська"
              price="187 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/07/Gavajska.jpg"
            />
            <Pizza_Block
              title="Салямі"
              price="167 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/06/Salyami.jpg"
            />
            <Pizza_Block
              title="Маргарита"
              price="134 грн"
              image="https://starwood.vn.ua/wp-content/uploads/2018/06/Margarita-1.jpg"
            />
            <Pizza_Block
              title="4 сира"
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
