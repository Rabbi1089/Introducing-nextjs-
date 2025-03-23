import Link from "next/link";
import React from "react";

const AboutContent = () => {
  return (
    <div>
      <h1>I am from about aboutContent</h1>
      <span className=" text-green-500 space-x-2">
        {" "}
        <Link href="/about/vision">Vision</Link>
      </span>
      <span className=" m-3 p-3">
        <Link href="/about/mission">Mission</Link>
      </span>
    </div>
  );
};

export default AboutContent;
