// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// import React from 'react';
// import { CartProvider } from './CartContext';
// // import other necessary components

// const App = () => {
//   return (
//     <CartProvider>
//       {/* Your application components */}
//     </CartProvider>
//   );
// };

// export default App;

// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Cart = () => {
//   const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button onClick={() => removeFromCart(item.id)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default Cart;
