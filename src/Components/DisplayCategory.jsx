import React from 'react';

const DisplayByCategory = ({ items, selectedCategory }) => {
  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
        <div className='Itemlist-Container scale-up'>
        <h2>Items in {selectedCategory} Category</h2>
        
        {filteredItems.length === 0 ? (
            <p className='No-Items' >No items available in this category.</p>
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
                {filteredItems.map(item => (
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
  );
};

export default DisplayByCategory;
