"use client";

import React, { useState } from 'react'; 
import Item from './item';
import itemsData from './items.json';

function ItemList() {
  const [items, setItems] = useState(itemsData);

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
