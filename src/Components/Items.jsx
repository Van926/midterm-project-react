import React, { useState } from 'react';
import './Styles.css';
import AddItemForm from './AddItemForm'; // Import AddItemForm component
import UpdateItemForm from './UpdateItemForm'; // Import UpdateItemForm component
import DeleteItemForm from './DeleteItemForm'; // Import DeleteItemForm component

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

    const existingItemIndex = items.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedItem = {
        id,
        name: name || items[existingItemIndex].name,
        quantity: quantity || items[existingItemIndex].quantity,
        price: price || items[existingItemIndex].price,
        category: category || items[existingItemIndex].category,
      };
      if (!isValidInput(quantity) || !isValidInput(price)) {
        setErrorMessage('Error: Quantity and Price must be numbers greater than 0.');
        setMessage('');
        return;
      }
      

      const updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
      setItems(updatedItems);

      setMessage(`Item with ID ${id} has been updated successfully!`);
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
    setErrorMessage('');
    setMessage('');
  };

  const handleShowUpdateForm = () => {
    setShowAddForm(false);
    setShowUpdateForm(true);
    setShowDeleteForm(false);
    setDisplayAll(false)
    setErrorMessage('');
    setMessage('');
  };
  const handleShowDeleteForm = () =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true)
    setDisplayAll(false)
    setErrorMessage('')
    setMessage('')
  }

  const handleOtherButtonClick = () => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(false);
    setDisplaybyCategory(false)
    setErrorMessage('');
    setMessage('');
  };

  const handleDisplaybyCategory =() =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(false);
    setShowDeleteForm(false);
    setDisplaybyCategory(true);
    setErrorMessage('');
    setMessage('');

  }

  const handleDisplayAllItems = () =>{
    setShowAddForm(false);
    setShowUpdateForm(false);
    setDisplayAll(true);
    setShowDeleteForm(false);
    setErrorMessage('');
    setMessage('');
  }
  const handleCategory = (e) => {
    setSelectedCategory(e.target.value); // Update selected category
  };
  return (
    <div>
      <h1>Inventory Management System</h1>

      <div className='Container-btns'>
        <button onClick={handleShowAddForm}>Add Item</button>
        <button onClick={handleShowUpdateForm}>Update Item</button>
        <button onClick={handleShowDeleteForm}>Remove Item</button>
        <button onClick={handleDisplaybyCategory}>Display Items by Category</button>
        <button onClick={handleDisplayAllItems}>Display All Items</button>
        <button onClick={handleOtherButtonClick}>Search Item</button>
        <button onClick={handleOtherButtonClick}>Sort Items</button>
        <button onClick={handleOtherButtonClick}>Display Low Stock Items</button>
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

      {displayCategory && (
        <div>
          <div className='Form-Container'>
            <label>Select Category: </label>
            <select value={selectedCategory} onChange={handleCategory}>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
            <div className='Itemlist-Container'>
              <h2>Items in {selectedCategory} Category</h2>
              <div className='Items'>
                <ul>
                  {items
                    .filter(item => item.category === selectedCategory) // Filter items by selected category
                    .map((item) => (
                      <li key={item.id}>
                        ID: {item.id}  Name: {item.name} - Category: {item.category}, Quantity: {item.quantity}, Price: ${item.price}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
        </div>
      )}
    



    {displayAll &&
      <div className='Itemlist-Container'>
        <h2>Items List</h2>
        <div className='Items'>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
              ID: {item.id}  Name: {item.name} - Category: {item.category}, Quantity: {item.quantity}, Price: ${item.price}
              </li>
            ))}
          </ul>
       </div>
      </div>}
    </div>
  );
};

export default InventoryManagementSystem;
