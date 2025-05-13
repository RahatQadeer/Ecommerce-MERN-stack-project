import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  // console.log(latestProducts);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Assuming you want the first 4 products as latest
  }, []);

  return (
    <div className="my-5 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={" COLLECTIONS"} />
        <p className="w-3/4 px-[10%] m-auto text-xs sm:text-sm md:text-base text-gray-600">
          From everyday elegance to once-in-a-lifetime treasures, our
          collections are made to make you feel extraordinary—because you are.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
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

export default LatestCollection;
