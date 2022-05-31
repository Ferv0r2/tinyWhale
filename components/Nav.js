import React from "react";
import Loading from "components/Loading";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ address, network }) => {
  let account = "";
  if (address !== undefined) {
    account = address.replace(address.substring(6, 36), "...");
  }

  return (
    <header className="max-w-5xl m-auto sticky top-0 px-2 sm:px-6 lg:px-8 font-[GmarketSansBold] z-99">
      <div className="relative flex items-center justify-between h-28 text-neutral-400 italic">
        <Link href="/">
          <div className="flex cursor-pointer">
            <div className="relative w-16 h-16 m-auto">
              <Image layout="fill" src="/images/logo.png" alt="Kepler-452b" />
            </div>
            <p className="block mx-3 m-auto font-bold text-3xl">Kepler-452b</p>
          </div>
        </Link>
        {address ? (
          <div className="hidden md:block">
            <div className="flex">
              <div className="relative h-7 w-7">
                <Image
                  layout="fill"
                  src="/images/klaytn_logo.png"
                  alt={network}
                />
              </div>
              <p className="block w-40 m-auto mx-1.5 font-medium text-base text-ellipsis overflow-hidden">
                {account}
              </p>
            </div>
          </div>
        ) : (
          <div className="hidden md:block">
            <div className="flex">
              <Loading />
              <p className="mx-1.5 m-auto text-sm">Login with Kaikas</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
