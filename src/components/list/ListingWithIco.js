
import React from "react";
import ListItemWithIco from "./ListItemWithIco";

function ListingWithIco ({items}) {

  return (
    <ul>
      {items.map(item => <ListItemWithIco item={item}/> )}
    </ul>
  );
}

export default ListingWithIco;