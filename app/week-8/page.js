"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now().toString(), ...newItem },
    ]);
  };

  const handleItemSelect = (name) => {
    // Clean up the item name for the API
    const cleanedName = name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex p-8 bg-gray-100 min-h-screen">
      <div className="flex-1 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="ml-8 w-80">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
