import React, { useState } from "react";
export default function Cart(cart) {
  
    console.log("Cart ," + cart)
  return (
    <h1>Hello World {cart.title} something</h1>
    // // <>
    //   {/* {cart.map((item) => (
    //     <div key={item.id}>
    //       <img src={item.image} alt={item.title} />
    //       <h3>{item.title}</h3>
    //       <p>Price: ${item.price}</p>
    //       {/* <p>
    //         Quantity:{" "}
    //         <input
    //           type="number"
    //           value={item.quantity}
    //           onChange={(e) =>
    //             addToCart({ ...item, quantity: parseInt(e.target.value) })
    //           }
    //         />
    //       </p> */}
    //       {/* <button onClick={() => removeFromCart(item)}>Remove</button> */}
    //     // </div>
    // //   ))} */}
    // {/* </> */}
  );
}
