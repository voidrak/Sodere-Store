import React from "react";
import ProductData from "./data/ProductData";
const App = () => {
  console.log(ProductData);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img src={ProductData[0].imgSrc} alt="" />
    </div>
  );
};

export default App;
