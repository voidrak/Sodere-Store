import { ProductContext } from "@/contexts/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard";
const FeaturedProduct = () => {
  const { productData } = useContext(ProductContext);
  const [loadedProducts, setLoadedProducts] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const handleProductLoad = () => {
    setLoadedProducts((prevCount) => prevCount + 1);
  };

  const filteredFeatured = productData.filter((product) => {
    return product.featuredProduct === true;
  });

  const mappedFeatured = filteredFeatured.map((product, index) => (
    <ProductCard
      product={{ ...product, itemNameAmharic: "" }}
      key={index}
      onLoad={handleProductLoad}
    />
  ));

  useEffect(() => {
    console.log(mappedFeatured);
  }, [productData]);

  return (
    <div className=" mb-[10rem]">
      <h1 className="my-8 text-center text-[28px]  font-bold text-[#2178ac] min-[450px]:text-[30px] sm:text-[35px] lg:text-[38px] xl:text-[40px] 2xl:text-[45px] ">
        Featured Product
      </h1>
      <div className="mx-auto  max-w-[1640px]">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
        >
          {mappedFeatured}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProduct;
