import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { ComboboxDemo } from "../ui/combobox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const CategoryFilter = () => {
  const { currentCategory } = useContext(ProductContext);
  //   const {optionValue,s}

  return (
    <div className="mt-4 flex flex-col items-center gap-y-4 md:flex-row md:justify-around">
      <ComboboxDemo />
      <Select
        onValueChange={() => {
          console.log("object");
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort BY</SelectLabel>
            <SelectItem value="Popular">Popular</SelectItem>
            <SelectItem value="alphabetToLow">A-Z</SelectItem>
            <SelectItem value="alphabetToHigh">Z-A</SelectItem>
            <SelectItem value="priceToHigh">Price, low to high</SelectItem>
            <SelectItem value="priceToLow">Price, high to low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
