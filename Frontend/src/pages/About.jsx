import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-5 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-5 flex flex-col md:flex-row gap-16">
        <img
          src={assets.logo}
          alt="about"
          className="w-full  border-2 md:max-w-[350px]"
        />
        <div className="flex flex-col gap-6 justify-center text-gray-600">
          <p>
            At RES(Rahat,Esha,Sadiqa) Jewelry shop, we believe jewelry is more
            than just adornment—it's a celebration of individuality, emotion,
            and timeless beauty.
          </p>
          <p>
            {" "}
            Each piece in our collection is thoughtfully crafted with precision,
            passion, and purpose. From delicate everyday essentials to bold
            statement designs, our jewelry is made to mark life's moments—big or
            small. With a focus on quality, elegance, and lasting value, we aim
            to create pieces that don't just complement your style, but tell
            your story.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to create jewelry that inspires confidence,
            celebrates individuality, and captures life’s most meaningful
            moments. We are committed to delivering exceptional craftsmanship,
            timeless design, and lasting value—so every piece you wear feels as
            special as the person wearing it.
          </p>
        </div>
      </div>
      <div className="text-xl py-7">
        <Title text1={" WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Our jewelry is made with care using strong, beautiful materials—so
            it looks great and lasts long.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shop anytime from your phone or computer. It’s quick, safe, and
            we’ll deliver right to your door.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We’re always here to help! Whether you need advice or have a
            question, we’ll make sure you’re happy.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
