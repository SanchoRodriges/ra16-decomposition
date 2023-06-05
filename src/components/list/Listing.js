import React from "react";
import ListItem from "./ListItem";

/**
 * Компонент списка
 * @param {Array} items - массив объектов списка
 */

function Listing ({items}) {
  return (
    <ul>
      {items.map(item => <ListItem item={item}/> )}
    </ul>
  );
}

export default Listing;