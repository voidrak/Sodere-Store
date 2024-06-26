import WishList from "@/Components/WishList/WishList";
import React from "react";
import ScrollToTop from "@/Components/ScrollToTop";
const WishListPage = () => {
  return (
    <div className="mb-16">
      <WishList />
      <ScrollToTop />
    </div>
  );
};

export default WishListPage;
