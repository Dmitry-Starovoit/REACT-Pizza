import { useEffect, useState } from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Pizza_Block from './components/Pizza_Block/Pizza_Block';
import Skeleton from './components/Pizza_Block/Skeleton';
import Sort from './components/Sort/Sort';
import './scss/app.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
