import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
