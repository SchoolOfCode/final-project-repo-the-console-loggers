import React from 'react';
import GreenBanner from '../../components/GreenBanner/GreenBanner';

function ShoppingList() {
  return (
    <main className="main-shoppinglist">
      <GreenBanner text="+ ADD NEW ITEM" />
      <h1>Shopping List goes here</h1>
    </main>
  );
}

export default ShoppingList;
