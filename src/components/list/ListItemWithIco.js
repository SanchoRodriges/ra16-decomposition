import React from "react";

/**
 * Элемент списка с иконкой
 * @param {Array} items - массив объектов списка
 */

function ListItemWithIco ({item}) {
  return (
    <li key={item.id}><img src={item.img} /> <a href={item.href}>{item.anchor}</a></li>
  );
}

export default ListItemWithIco;