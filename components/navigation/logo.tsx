import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center ">
        <div className="h-10 w-12 md:h-11 md:w-16 relative">
          <Image
            src="https://cdn.pixabay.com/photo/2017/07/10/19/42/logo-2491236_1280.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <p className="font-extrabold text-2xl">Coding Junior</p>
      </div>
    </Link>
  );
};

export default Logo;
