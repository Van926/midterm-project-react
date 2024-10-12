import React, { useState } from 'react';
import "./Styles/Styles.css";
import AddItemForm from './AddItemForm';
import UpdateItemForm from './UpdateItemForm';
import DeleteItemForm from './DeleteItemForm';
import SearchItem from './SearchItem';
import LowStockItems from './LowStockItem';
import SortItems from './SortItems';
import DisplayByCategory from './DisplayCategory';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const InventoryManagementSystem = () => {
  const [items, setItems] = useState([])

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Clothing')
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Clothing')

  const isValidInput = (value) => {
    return !isNaN(value) && Number(value) > 0;
  };

  const [showAddForm, setShowAddForm] = useState(false)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [showDeleteForm, setShowDeleteForm] = useState(false)
  const [displayAll, setDisplayAll] = useState(false)
  const [displayCategory, setDisplaybyCategory] = useState(false)
  const [displaySearchItem, setDisplaySearchItem] = useState(false)
  const [displayLowStock, setDisplayLowStock] = useState(false)
  const [displaySort, setDisplaySort] = useState(false)

  const AddItem = (e) => {
    e.preventDefault();
    
    if (!isValidInput(quantity) || !isValidInput(price)) {
      setErrorMessage('Error: Quantity and Price must be numbers greater than 0.');
      setMessage('');
      return;
    }
    const existingItem = items.find((item) => item.id === id)

    if (existingItem) {
      setErrorMessage('Error: Item ID is already in use.');
      setMessage('');
    } else {
      const newItem = {
        category,
        id,
        name,
        quantity: Number(quantity),
        price: Number(price),
      };

      setItems([...items, newItem]);
      setMessage('Item Added Successfully!');
      setErrorMessage('');

      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    }
  };

  const UpdateItem = (e) => {
    e.preventDefault();
    if (!isValidInput(quantity) && !isValidInput(price)) {
      setErrorMessage('Error: Quantity and Price must be numbers greater than 0.');
      setMessage('');
      return;
    }
    const existingItemIndex = items.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {

      const existingItem = items[existingItemIndex];

      const oldPrice = existingItem.price;
      const oldQuantity = existingItem.quantity;
  
      const updatedItem = {
        id,
        name: name || existingItem.name,
        quantity: quantity ? Number(quantity) : existingItem.quantity,
        price: price ? Number(price) : existingItem.price,
        category: category || existingItem.category,
      };
  

      const updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
      setItems(updatedItems);

      if(oldPrice!==updatedItem.price){
        setMessage(`Item with ID ${id} updated successfully! 
        Price changed from $${oldPrice} to $${updatedItem.price}. 
        .`);
      }
      if(oldQuantity!==updatedItem.quantity){
        setMessage(`Item with ID ${id} updated successfully! 
        Quantity changed from ${oldQuantity} to ${updatedItem.quantity}.`);
      }
      
      setErrorMessage(''); 

      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    } else {
      setErrorMessage('Error: Item not found.');
      setMessage('');
    }
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setShowUpdateForm(false);
    setShowDeleteForm(false)
    setDisplayAll(false)
    setDisplaybyCategory(false);
    setDisplaySearchItem(false);
    setDisplayLowStock(false);
    setDisplaySort(false);
    setErrorMessage('');
    setMessage('');
  };

  const handleShowUpdateForm = () => {
    setShowAddForm(false);
    setShowUpdateForm(true);
    setShowDeleteForm(false);
    setDisplayAll(false)
    setDisplaybyCategory(false);
    setDisplaySearchItem(false);
    setDisplayLowStock(false);
    setDisplaySort(false);
    setErrorMessage('');
    setMessage('');
  };
  const handleShowDeleteForm = () =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true)
    setDisplayAll(false)
    setDisplaybyCategory(false);
    setDisplaySearchItem(false);
    setDisplayLowStock(false);
    setDisplaySort(false);
    setErrorMessage('')
    setMessage('')
  }

  const handleDisplaybyCategory =() =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(false);
    setShowDeleteForm(false);
    setDisplaybyCategory(true);
    setDisplaySearchItem(false);
    setDisplayLowStock(false);
    setDisplaySort(false);
    setErrorMessage('');
    setMessage('');

  }

  const handleSearchItem =() =>{
    setDisplaySearchItem(true);
    setDisplayAll(false);
    setDisplaybyCategory(false);
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
    setDisplayLowStock(false);
    setDisplaySort(false);
    setErrorMessage('');
    setMessage('');
  }

  const handleDisplayAllItems = () =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(true);
    setShowDeleteForm(false);
    setDisplaybyCategory(false);
    setDisplaySearchItem(false);
    setDisplayLowStock(false);
    setDisplaySort(false);
    setErrorMessage('');
    setMessage('');
  }
  const handleDisplayLowStock = () =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(false);
    setShowDeleteForm(false);
    setDisplaybyCategory(false);
    setDisplaySearchItem(false);
    setDisplaySort(false);
    setDisplayLowStock(true);
    setErrorMessage('');
    setMessage('');
  }
  const handleSortItems = () =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(false);
    setShowDeleteForm(false);
    setDisplaybyCategory(false);
    setDisplaySearchItem(false);
    setDisplayLowStock(false);
    setDisplaySort(true);
    setErrorMessage('');
    setMessage('');
  }
  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div>
      <div className='Header-Container'>
       <h1>INVENTORY MANAGEMENT SYSTEM</h1>
      
        <div className='Container-btns'>
          <Router>
            <Link to="/Add Item"><button className='Add-btn' onClick={handleShowAddForm}>Add Item</button></Link>
            <Link to= "/Update Item" ><button className='Update-btn' onClick={handleShowUpdateForm}>Update Item</button></Link>
            <Link to= "/Remove Item" ><button className='Remove-btn' onClick={handleShowDeleteForm}>Remove Item</button></Link>
            <Link to= "/Display Items Category" ><button className='Display-btn' onClick={handleDisplaybyCategory}>Display Items by Category</button></Link>
            <Link to= "/Display All " ><button className='Display-btn' onClick={handleDisplayAllItems}>Display All Items</button></Link>
            <Link to= "/Search Item" ><button className='Search-btn' onClick={handleSearchItem}>Search Item</button></Link>
            <Link to= "/Sort Items" ><button className='Sort-btn' onClick={handleSortItems}>Sort Items</button></Link>
             <Link to= "/Low Stock Items"><button className='DisplayLow-btn' onClick={handleDisplayLowStock}>Display Low Stock Items</button></Link>
          </Router>
        </div> 
      </div>
      {showAddForm && (
       
        <AddItemForm
          id={id} setId={setId}
          name={name} setName={setName}
          price={price} setPrice={setPrice}
          quantity={quantity} setQuantity={setQuantity}
          category={category} setCategory={setCategory}
          AddItem={AddItem}
          errorMessage={errorMessage}
          message={message}
        />
      )}

      {showUpdateForm && (
        <UpdateItemForm
          id={id} setId={setId}
          name={name} setName={setName}
          price={price} setPrice={setPrice}
          quantity={quantity} setQuantity={setQuantity}
          category={category} setCategory={setCategory}
          UpdateItem={UpdateItem}
          errorMessage={errorMessage}
          message={message}
        />
      )}

      {showDeleteForm && (
        <DeleteItemForm items={items} setItems={setItems}/>
          
      )
      }
      

      {displaySearchItem && (
        <SearchItem items={items} />
      )
      }
      
      {displayLowStock && 
        <LowStockItems items={items}/>
      }

      {displaySort && 
      <SortItems items={items} />}

                                                                                                                    
        {displayCategory && (
        <div>
          <div className='Form-Container scale-up'>
            <h2>Display By Category</h2>
            <label>Select Category:</label>
            <select value={selectedCategory} onChange={handleCategory}>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <DisplayByCategory items={items} selectedCategory={selectedCategory} />
        </div>
      )}

      
    {displayAll &&(
        <div className='Itemlist-Container scale-up'>
          <h2>Displaying All Items</h2>
          {items.length === 0 ? (
            <p className='No-Items'> No Items yet go add an Item</p>
          ) : (
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
            </tr>
             ))}
              </tbody>
          </table>
          )}
      </div>
    )}

    


    </div>

    
  );
};

export default InventoryManagementSystem;
