import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    console.log("Best Sellers Found:", bestProduct); // Add this line
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);
  return (
    <div className="my-10 border-t-2">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={" SELLER"} />
        <p className="w-3/4  px-[10%] m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our most-loved pieces, chosen by customers like you. These bestsellers
          are timeless, elegant, and always in demand.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
