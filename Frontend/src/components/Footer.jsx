import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-1 py-4" alt="" />
          <p className="text-gray-600 w-full md:w-2/3">
            Your satisfaction is our success.
          </p>
        </div>

        <div>
          <p className="text-xl mb-1 py-10 font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl mb-1 font-medium py-10 ">GET IN TOUCH </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92347374374734</li>
            <li>rahatqadeerbhatti@gmail.com</li>
            <li>eshaasif005@gmail.com</li>
            <li>bibisadiqa675@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy; 2023 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
