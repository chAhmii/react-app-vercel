import React, { useState } from "react";

const ProductItem = ({product, onSelect ,setCart,cart}) => {
  const [quantity, setQuantity] = useState(0);
  const handleClick = () => {
    onSelect(product);
  }
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  }

  
  return (
    <div className="item-body">
      <div className="product-item">
        <img src={product.images} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock} units</p>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
          min="0"
          max={product.stock}
        />
        <button onClick={addToCart}>Add to cart</button>
        <button onClick={handleClick}>View Details</button>
      </div>
    </div>
  );
};

export default ProductItem;
