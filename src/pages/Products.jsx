import React from "react";
import ProductsCard from "../components/ProductsCard";
import product1 from "../images/products/product-1.jpg";
import product2 from "../images/products/product-2.jpg";
import product3 from "../images/products/product-3.jpg";
import product4 from "../images/products/product-4.jpg";

const Products = () => {
  const productsData = [
    {
      pic: product1,
      text: "Musk Melon",
    },
    {
      pic: product2,
      text: "Orange",
    },
    {
      pic: product3,
      text: "Apple",
    },
    {
      pic: product4,
      text: "Dragon",
    },
  ];
  return (
    <>
      <ProductsCard products={productsData} />
    </>
  );
};

export default Products;
