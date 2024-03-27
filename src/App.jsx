import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductContextProvider } from "./contexts/ProductContext";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";
import SearchPage from "./Pages/SearchPage";
import CategoriesPage from "./Pages/CategoriesPage";
import WishListPage from "./Pages/WishListPage";
import ProductPage from "./Pages/ProductPage";
import "./App.css";
import { CartContextProvider } from "./contexts/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { WishListContextProvider } from "./contexts/WishListContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import AboutUsPage from "./Pages/AboutUsPage";
import ScrollToTop from "./Components/ScrollToTop";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPage from "./Pages/PrivacyPage";
import ShippingInfo from "./Pages/ShippingInfo";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const notify = () => toast("Here is your toast.");
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <WishListContextProvider>
          <SearchContextProvider>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                // Define default options
                className: "",

                duration: 5000,
                style: {
                  background: "#363636",
                  color: "#fff",
                  marginTop: "50px",
                },

                // Default options for specific types
                success: {
                  duration: 2000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                  style: {
                    background: "#5a9bc1",
                    color: "#fff",
                  },
                },
                error: {
                  duration: 2000,

                  style: {
                    background: "#fff",
                    color: "#c15a5a",
                  },
                },
              }}
            />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/:productId" element={<ProductPage />} />
                  <Route path="contact" element={<ContactUsPage />} />
                  <Route path="search" element={<SearchPage />} />
                  <Route path="categories" element={<CategoriesPage />} />
                  <Route path="wishlist" element={<WishListPage />} />
                  <Route path="profile" element={<LoginPage />} />
                  <Route path="about" element={<AboutUsPage />} />
                  <Route path="terms" element={<TermsConditions />} />
                  <Route path="privacy" element={<PrivacyPage />} />
                  <Route path="shipping-payment" element={<ShippingInfo />} />
                  <Route path="*" element={<ErrorPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SearchContextProvider>
        </WishListContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
