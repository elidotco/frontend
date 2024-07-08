import Link from "next/link";
import React from "react";

const Button = ({ name, path }) => {
  return (
    <Link href={path}>
      <div className="px-4 bg-transparent text-orange py-3 uppercase border border-orange w-fit">
        {" "}
        {name}
      </div>
    </Link>
  );
};

export default Button;
