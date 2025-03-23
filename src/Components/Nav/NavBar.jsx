"use client";

//"use client"needed to add when we add any hook or button

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  //useRouter must from next/navigation || router use for redirect a url
  const links = [
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "home",
      path: "/home",
    },
    {
      title: "service",
      path: "/service",
    },
    {
      title: "blog",
      path: "/blog",
    },
  ];

  const handler = () => {
    router.push("/login");
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <h1 className="bg-yellow-500 text-5xl">Next Intro</h1>
      </div>
      <div className="w-2/4">
        <nav>
          <ul className=" border-2 border-red-600 bg-amber-600  text-blue-50 flex m-1 p-2 justify-between uppercase">
            {links?.map((link) => (
              <Link
                className={`${
                  pathName === link.path ? "text-cyan-400 underline" : ""
                }`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-1/4 flex justify-end  bg-amber-300">
        {" "}
        <button
          onClick={handler}
          className=" bg-amber-100 text-black m-2 p-2 border"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
