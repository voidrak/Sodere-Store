import React, { useContext, useState } from "react";
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

const CategoryFilter = ({ handleCategorySort }) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-y-4 md:flex-row md:justify-around">
      <ComboboxDemo />
      <Select
        onValueChange={(e) => {
          handleCategorySort(e);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort BY</SelectLabel>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="AZ">A-Z</SelectItem>
            <SelectItem value="ZA">Z-A</SelectItem>
            <SelectItem value="toHigh">Price, low to high</SelectItem>
            <SelectItem value="toLow">Price, high to low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
