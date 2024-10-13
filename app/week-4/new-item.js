// app/week-4/new-item.js
"use client";

import { useState } from 'react';

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 border rounded shadow-md flex items-center justify-between w-40">
            <span className="text-xl text-black">{quantity}</span>
            <div className="flex space-x-1">
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="px-2 py-1 bg-gray-400 text-white rounded disabled:opacity-50"
                >
                    -
                </button>
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default NewItem;
