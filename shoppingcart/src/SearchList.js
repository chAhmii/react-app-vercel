import React from "react";
import ProductItem from "./productitem";
export default function SearchList(searchTerm, pr,handleProductSelect,setCart,cart) {
  pr.map((product) => {
    if (product.title === searchTerm) {
      return (
        // <ProductItem
        //   product={product}
        //   onSelect={handleProductSelect}
        //   setCart={setCart}
        //   cart={cart}
        // />
        <h1>HEllo world </h1>
      );
    }
  });
}
