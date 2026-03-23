import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img 
      src={product.image} 
      alt={product.name} 
      style={{ cursor: "pointer" }}
      onClick={() => window.open(product.link, "_blank")}
    />
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;