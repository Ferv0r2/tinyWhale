import React from "react";
import { useRouter } from "next/router";

const Nav = ({ address, network }) => {
  const router = useRouter();

  let account = "";
  if (address !== undefined) {
    account = address.replace(address.substring(6, 36), "...");
  }

  const contents = [
    {
      name: "홈",
      url: "/",
    },
    {
      name: "포획",
      url: "/mint",
    },
    {
      name: "보호색",
      url: "/camouflage",
    },
    {
      name: "탐험",
      url: "/adventure",
    },
  ];

  const navbar = contents.map((data) => {
    return (
      <li key={data.name} className="mx-2">
        <a className="cursor-pointer" onClick={(e) => router.push(data.url)}>
          {data.name}
        </a>
      </li>
    );
  });

  return (
    <header className="sticky top-0 px-2 sm:px-6 lg:px-8 z-99 bg-gray-600">
      <div className="max-w-5xl m-auto ">
        <div className="relative flex items-center justify-between h-28 text-neutral-400">
          <figure className="flex cursor-pointer">
            <img
              className="relative w-16 h-16 m-auto"
              src="images/logo.png"
              alt="logo"
            />
            <figcaption className="block mx-3 m-auto text-3xl">
              Tiny Whales
            </figcaption>
          </figure>
          <nav className="">
            <ul className="flex justify-between">{navbar}</ul>
          </nav>
          {address ? (
            <div className="hidden md:block">
              <div className="flex">
                <img
                  className="relative h-7 w-7"
                  src="images/klaytn_logo.png"
                  alt={network}
                />
                <p className="block w-40 m-auto mx-1.5 font-medium text-base text-ellipsis overflow-hidden">
                  {account}
                </p>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="flex">
                <img
                  className="relative flex w-7 h-7 animate-spin"
                  src="images/loading.png"
                  alt="loading"
                />
                <p className="mx-1.5 m-auto text-sm">Login with Kaikas</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
