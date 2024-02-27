import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";
import SearchPage from "./Pages/SearchPage";
import CategoriesPage from "./Pages/CategoriesPage";
import WishListPage from "./Pages/WishListPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactUsPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="wishlist" element={<WishListPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
