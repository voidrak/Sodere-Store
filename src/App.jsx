import React from "react";
import ProductData from "./data/ProductData";
const App = () => {
  console.log(ProductData);
  return (
    <div className="grid grid-cols-8 gap-y-4 bg-slate-500">
      {ProductData.map((item) => (
        <img
          src={item.imgSrc}
          alt={item.itemNameEnglish}
          srcset=""
          className=" w-[100px] aspect-[233/345]"
        />
      ))}
    </div>
  );
};

export default App;
