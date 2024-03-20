import React, { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  return (
    <SearchContext.Provider
      value={{ searchData, setSearchData, searchInput, setSearchInput }}
    >
      {children}
    </SearchContext.Provider>
  );
};
