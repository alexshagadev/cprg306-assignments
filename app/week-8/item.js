import React from "react";

function Item({ id, name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="flex justify-between items-center bg-white p-4 shadow-md mb-2 rounded-lg cursor-pointer hover:bg-gray-100"
    >
      <div>
        <span className="font-semibold text-gray-800">{name}</span>
        <span className="text-sm text-gray-500 ml-2">({category})</span>
      </div>
      <span className="text-blue-600 font-bold">x {quantity}</span>
    </li>
  );
}

export default Item;
