import React from 'react';
import Item from './item';

function ItemList({ items }) {
  return (
    <ul className="mt-6 space-y-2">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}

export default ItemList;
