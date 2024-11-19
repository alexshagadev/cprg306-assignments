"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now().toString(), ...newItem },
    ]);
  };

  return (
    <main className="flex p-8 bg-gray-100 min-h-screen">
      {/* Shopping List Section */}
      <div className="flex-1 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Shopping List
        </h1>
        <ItemList items={items} />
      </div>

      {/* Add New Item Section */}
      <div className="w-80 ml-8">
        <NewItem onAddItem={handleAddItem} />
      </div>
    </main>
  );
}

export default Page;
