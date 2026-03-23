import React from "react";

const ProductPreview = ({ product }) => (
  <div 
    className="product-card" 
    style={{ cursor: "pointer" }}
    onClick={() => window.open(product.link, "_blank")}
  >
    <img src={product.image} alt={product.name} />
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  </div>
);

export default ProductPreview;