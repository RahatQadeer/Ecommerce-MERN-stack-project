import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="border-t ">
      <div className=" text-center text-2xl pt-5  ">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-5 flex flex-col md:flex-row gap-10 mb-30 justify-center">
        <img
          className="w-full md:max-w-[500px] md:max-h-[350px]"
          src={assets.contact_img}
          alt="contact"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Riphah International University
            <br /> Gulberg Green Campus{" "}
          </p>
          <p className="text-gray-500">
            {" "}
            Tel: (415) 987-6543
            <br />
            Email: rahatqadeerbhatti@gmail.com, eshaasif005@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            {" "}
            We’d love to hear from you! Whether you have a question, need help
            with an order, or just want to say hello—our team is here for you.
            Reach out anytime by email, phone, or through our contact form
            below. We’ll get back to you as soon as possible!
          </p>
          <button className="border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
