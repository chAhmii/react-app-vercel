import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <>
      <h1>Product Details</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="item-body">
          <div className="product-item">
            <h1>{product.title}</h1>
            <img src={product.images} alt={product.title} />
          </div>
        </div>

        <div
          style={{ float:"left", backgroundColor: "#f2f2f2", padding: "20px" }}
        >
          <p>Description:</p>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>In Stock: {product.stock}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
