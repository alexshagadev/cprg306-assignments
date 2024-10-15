// app/week-4/new-item.js
"use client";

import { useState } from 'react';

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState(''); // State for the name field
    const [category, setCategory] = useState('produce'); // Initialize the category state variable

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleNameChange = (event) => {
        setName(event.target.value); // Update the name state when the input changes
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value); // Update the category state when the selection changes
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Create an item object with current state values
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        // Log the item object to the console
        console.log(item);

        // Display an alert with the current state of name, quantity, and category
        alert(`Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        // Reset the state variables to their initial values
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded shadow-md flex flex-col space-y-4 w-60">
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Item name"
                className="p-2 border rounded w-full text-black"
            />
            <select
                value={category}
                onChange={handleCategoryChange}
                className="p-2 border rounded w-full text-black"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            <div className="flex items-center justify-between">
                <span className="text-xl text-black">{quantity}</span>
                <div className="flex space-x-1">
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="px-2 py-1 bg-gray-400 text-white rounded disabled:opacity-50"
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={increment}
                        disabled={quantity === 20}
                        className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                Add Item
            </button>
        </form>
    );
};

export default NewItem;
