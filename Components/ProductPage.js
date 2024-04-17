import React, { useState } from 'react';
import ProductInfo from './ProductInfo';


function ProductPage() {

  const products = [
    { id: 1, name: 'Hotdog', price: '15', description: 'Mahaba na mainit' },
    { id: 2, name: 'Burger', price: '35', description: 'Plat na mainit' },
    { id: 3, name: 'Siopao', price: '25', description: 'Bilog na mainit' },
    { id: 4, name: 'Footlong', price: '45', description: 'Mas mahaba na mainit' },
    { id: 5, name: 'Turon', price: '20', description: 'Mahaba din pero saging' },
    { id: 6, name: 'Tao', price: '10000000', description: 'Mahaba din to kaso buhay' },
    { id: 7, name: 'Fishball', price: '1', description: 'Maliit na bilog na mainit' },
    { id: 8, name: 'KwekKwek', price: '10', description: 'Description' },
    { id: 9, name: 'Kikkyam', price: '2', description: 'Description' },
    { id: 10, name: 'Shawarma', price: '80', description: 'Description' },

  ];


  return (
    <div>   
      <h1>PRODUCTS</h1>
      {products.map(product => (
        <ProductInfo 
          key={product.id} 
          name={product.name} 
          price={product.price} 
          description={product.description} 
          onAddToCart={() => addToCart(product)} 
        />
      ))}
    </div>
  );
}

export default ProductPage;