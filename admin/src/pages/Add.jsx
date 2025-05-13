import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Rings");
  const [subCategory, setSubCategory] = useState("Gold");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller.toString());
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setSizes([]);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSizeClick = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const sizeOptions = {
    Rings: ["5", "6", "7", "8", "9", "10", "11", "12"],
    Necklaces: ["16 cm", "18 cm", "20 cm", "22 cm"],
    Earrings: ["Small", "Medium", "Large"],
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* Image Uploads */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[
            { id: "image1", state: image1, setState: setImage1 },
            { id: "image2", state: image2, setState: setImage2 },
            { id: "image3", state: image3, setState: setImage3 },
            { id: "image4", state: image4, setState: setImage4 },
          ].map(({ id, state, setState }) => (
            <label key={id} htmlFor={id}>
              <img
                className="w-20 h-20 object-cover border"
                src={!state ? assets.upload_area : URL.createObjectURL(state)}
                alt=""
              />
              <input
                type="file"
                id={id}
                hidden
                onChange={(e) => setState(e.target.files[0])}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          className="w-full max-w-[500px] px-3 py-2 border"
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
          className="w-full max-w-[500px] px-3 py-2 border"
          required
        />
      </div>

      {/* Category & Sub-Category */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div>
          <p className="mb-2">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border"
          >
            <option value="Rings">Rings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Earrings">Earrings</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub Category</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="px-3 py-2 border"
          >
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Silver">Silver</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0"
            className="px-3 py-2 border"
            required
          />
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <p className="mb-2">Select Sizes</p>
        <div className="flex flex-wrap gap-2">
          {sizeOptions[category].map((size) => (
            <button
              key={size}
              type="button"
              className={`px-4 py-1 border rounded-full ${
                sizes.includes(size) ? "bg-pink-200" : "bg-gray-100"
              }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div>
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />
        <label htmlFor="bestseller" className="ml-2 cursor-pointer">
          Add to Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white py-3 px-6 mt-4 rounded hover:bg-gray-800 active:scale-95 transition"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
