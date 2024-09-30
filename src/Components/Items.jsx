import React from 'react';

const Menu = () => {
  const [items, setItems] = React.useState([]);

  
  const handleAddItem = () => {
    console.log("Add Item Clicked");
    
  };

  const handleUpdateItem = () => {
    console.log("Update Item Clicked");
    
  };

  const handleRemoveItem = () => {
    console.log("Remove Item Clicked");
    
  };

  const handleDisplayItemsByCategory = () => {
    console.log("Display Items by Category Clicked");
   
  };

  const handleDisplayAllItems = () => {
    console.log("Display All Items Clicked");
  
  };

  const handleSearchItem = () => {
    console.log("Search Item Clicked");
   
  };

  const handleSortItems = () => {
    console.log("Sort Items Clicked");
  
  };

  const handleDisplayLowStockItems = () => {
    console.log("Display Low Stock Items Clicked");

  };

  return (
    <div>
      <h1>Item Management Menu</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleUpdateItem}>Update Item</button>
      <button onClick={handleRemoveItem}>Remove Item</button>
      <button onClick={handleDisplayItemsByCategory}>Display Items by Category</button>
      <button onClick={handleDisplayAllItems}>Display All Items</button>
      <button onClick={handleSearchItem}>Search Item</button>
      <button onClick={handleSortItems}>Sort Items</button>
      <button onClick={handleDisplayLowStockItems}>Display Low Stock Items</button>
    </div>
  );
};

export default Menu;
