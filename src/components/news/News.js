import React from "react";

/**
 * Компонент блока с новостной лентой
 */

function News () {
  return (
    <div className="news">
      <div className="news-headers">
        <ul>
          <li><a href="#">Сейчас в СМИ</a></li>
          <li><a href="#">В Германии</a></li>
          <li><a href="#">Рекомендуем</a></li>
          <li><a href="#">31 июля, среда 00:00</a></li>
        </ul>
      </div>

      <div className="news-list">
        <ul>
            <li>
              <img src="https://picsum.photos/16/16" />
              <a href="#">Вы работаете в стартапе</a>
            </li>
            <li>
              <img src="https://picsum.photos/16/16" />
              <a href="#">Вам принесли дизайн-макет, похожий на этот</a>
            </li>
            <li>
              <img src="https://picsum.photos/16/16" />
              <a href="#">Функциональность и стилизацию реализовывать не нужно</a>
            </li>
            <li>
              <img src="https://picsum.photos/16/16" />
              <a href="#">Разбейте весь интерфейс на компоненты и в файле каждого компонента</a>
            </li>
            <li>
              <img src="https://picsum.photos/16/16" />
              <a href="#">Постарайтесь повторяющиеся компоненты сделать настраемыми</a>
            </li>
          </ul>
      </div>

      <div className="exchange">
        <ul>
          <li>
            USD 81,50 +1,09
          </li>
          <li>
            EUR 87,41 +1,09
          </li>
          <li>
            Нефть 81,50 +1,09
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default News;
