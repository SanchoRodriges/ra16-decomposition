import React from "react";

function ListItem ({item}) {
  return (
    <li key={item.id}><a href={item.href}>{item.anchor}</a></li>
  );
}

export default ListItem;
