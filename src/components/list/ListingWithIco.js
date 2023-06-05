import React from "react";
import ListItemWithIco from "./ListItemWithIco";

/**
 * Компонент списка, который содержит элементы с иконкой
 * @param {Array} items - массив объектов списка
 */

function ListingWithIco ({items}) {

  return (
    <ul>
      {items.map(item => <ListItemWithIco item={item}/> )}
    </ul>
  );
}

export default ListingWithIco;