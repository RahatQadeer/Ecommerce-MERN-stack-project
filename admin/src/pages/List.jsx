import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
// import { token } from '../utils/auth'

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const deleteProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/delete",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All products List</p>
      <div className="flex flex-col gap-2">
        {/* *************list table title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* **************Product List */}
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-col-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-centergap-2 py-1 px-2 border text-sm "
            >
              <img
                src={item.image[0]}
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p
                onClick={() => deleteProduct(item._id)}
                className="md:text-center text-right cursor-pointer text-lg"
              >
                X
              </p>
              {/* <button className='bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm'>Delete</button> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
