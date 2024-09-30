import React from 'react';
import { useState } from 'react';
import './Styles.css'

const Menu = () => {
  const [items, setItems] = React.useState([]);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  
  const AddItem = (e) => {
    e.preventDefault()
    const newItem = {
        id: id,
        name: name,
        quantity: Number(quantity),  // Convert to number
        price: Number(price)         // Convert to number
      };
      setItems([...items, newItem]);

    // Clear form inputs after adding
    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    
  };

  const UpdateItem = () => {

    
  };

  const RemoveItem = () => {
    
    
  };

  const DisplayItemsByCategory = () => {
   
   
  };

  const DisplayAllItems = () => {
   
  
  };

  const SearchItem = () => {
    
   
  };

  const SortItems = () => {
    
  
  };

  const DisplayLowStockItems = () => {

  };

  return (
    <body>
        <div>
        <h1>Item Management System</h1>
            <div className='AddForm-Container'>
                <h2>Add Item</h2>
                <form onSubmit={AddItem}>
                    <div className='ID-form'>
                        <label>ID: </label>
                        <input type="text" value={id} onChange={(e)=> setId(e.target.value)}
                        required>
                        </input>
                    </div>
                    <div className='Name-form'>
                        <label>Name: </label>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}
                        required>
                        </input>
                    </div>
                    <div className='Price-form'>
                        <label>Price: </label>
                        <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}
                        required>
                        </input>
                    </div>
                    <div className='Quantity-form'>
                        <label>Quantity: </label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <button className='submit-btn' type="submit">Add Item</button>
                </form>

            </div>
                <div className='Container-btns'>
                    <button onClick={UpdateItem}>Update Item</button>
                    <button onClick={RemoveItem}>Remove Item</button>
                    <button onClick={DisplayItemsByCategory}>Display Items by Category</button>
                    <button onClick={DisplayAllItems}>Display All Items</button>
                    <button onClick={SearchItem}>Search Item</button>
                    <button onClick={SortItems}>Sort Items</button>
                    <button onClick={DisplayLowStockItems}>Display Low Stock Items</button>
                </div>
            </div>
            <h2>Items List</h2>
      <div>
        <ul>
            {items.map((item) => (
            <li key={item.id}>
                {item.name} - Quantity: {item.quantity}, Price: ${item.price.toFixed(2)}
            </li>
            ))}
        </ul>
      </div>      
    </body>
  );
};

export default Menu;
