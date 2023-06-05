import React from "react";

/**
 * Компонент блока со строкой поиска и логотипом
 */

function Search () {
  return (
    <div className="search">
        <div className="search-category">
          <ul>
            <li><a href="#">Видео</a></li>
            <li><a href="#">Картинки</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Карты</a></li>
            <li><a href="#">Маркет</a></li>
            <li><a href="#">Переводчик</a></li>
            <li><a href="#">Эфир</a></li>
            <li><a href="#">ещё</a></li>
          </ul>
        </div>
        <div className="search-elements">
          <div className="search-logo">Яндекс</div>
          <div className="search-input"></div>
          <div className="search-btn">Поиск</div>
        </div>
        <div className="search-tip">
          Найдётся всё. Например, <a href="#">фаза луны</a>
        </div>
      </div>
  );
}

export default Search;
