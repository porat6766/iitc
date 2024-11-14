import React from "react";

const products = [
    {
      name: "Laptop",
      price: 3500,
      description: "High-performance laptop with 16GB RAM and 512GB SSD."
    },
    {
      name: "Smartphone",
      price: 1200,
      description: "5G-enabled smartphone with 128GB storage and a 48MP camera."
    },
    {
      name: "Headphones",
      price: 300,
      description: "Wireless headphones with noise-canceling technology."
    },
    {
      name: "Smartwatch",
      price: 800,
      description: "Smartwatch with health tracking and customizable watch faces."
    }
  ];
  
  const ListItems = () => {
    const list =  products.map((product) => {
        return <li key={product.name}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </li>
    });
    return <ul>{list}</ul>;
  };
  
export default ListItems