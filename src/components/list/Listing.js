import React from "react";
import ListItem from "./ListItem";

function Listing ({items}) {
  return (
    <ul>
      {items.map(item => <ListItem item={item}/> )}
    </ul>
  );
}

export default Listing;