import React from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  return (
    <ul className="mt-6 space-y-2">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={onItemSelect}
        />
      ))}
    </ul>
  );
}

export default ItemList;
