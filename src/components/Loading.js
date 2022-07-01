import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
        <Image
          layout="fill"
          className=" animate-spin"
          src="/images/loading.png"
        />
      </div>
    </div>
  );
};

export default Loading;
