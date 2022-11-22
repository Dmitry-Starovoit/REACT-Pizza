import { Link } from "react-router-dom";
import style from "./NotFoundBlock.module.scss"

function NotFoundBlock(props) {
  return (
    <div class={style.header}>
      <h2>Сторінка не знайдена <icon>😕</icon></h2>
      <p className={style.text}>
        Скоріше за все, ви вказали не вірну адресу сторінки.<br />
        Для того, щоб повернутись назад, перейдіть на головну сторінку.
      </p>
      
      <Link to="/" class={style.button}>
        <span>Повернутись назад</span>
      </Link>
    </div>
  );
}

export default NotFoundBlock;