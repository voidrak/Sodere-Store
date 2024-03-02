"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ProductContext } from "@/contexts/ProductContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { categories } = React.useContext(ProductContext);
  const allCategories = ["ALL", ...categories];
  const categoriesOption = allCategories.map((item) => ({
    label: item,
    value: item.toLowerCase(),
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" w-[180px] items-center justify-between bg-black text-white"
        >
          {value
            ? categoriesOption.find((category) => category.value === value)
                ?.label
            : "Filter by category"}
          <MdOutlineKeyboardArrowDown className="" size={20} color="white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No Category Found</CommandEmpty>

          <CommandGroup>
            {categoriesOption.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  console.log(category.label);
                }}
              >
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
