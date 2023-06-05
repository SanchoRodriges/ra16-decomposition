import React from "react";

/**
 * Элемент списка
 * @param {Array} items - массив объектов списка
 */

function ListItem ({item}) {
  return (
    <li key={item.id}><a href={item.href}>{item.anchor}</a></li>
  );
}

export default ListItem;
