import React from 'react';

function Item(props) {
  return (
    <li className="flex justify-between items-center bg-white p-4 shadow-md mb-2 rounded-lg">
      <div>
        <span className="font-semibold text-gray-800">{props.name}</span>
        <span className="text-sm text-gray-500 ml-2">({props.category})</span>
      </div>
      <span className="text-blue-600 font-bold">x {props.quantity}</span>
    </li>
  );
}

export default Item;
