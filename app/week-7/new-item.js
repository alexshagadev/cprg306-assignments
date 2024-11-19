import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 border rounded-lg shadow-md flex flex-col space-y-4 w-full"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Item</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="p-2 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        <span className="text-xl text-gray-700 font-medium">{quantity}</span>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={decrement}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
