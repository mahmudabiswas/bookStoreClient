import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/" className="  text-2xl">
        BookStore
      </Link>
    </div>
  );
};

export default Logo;
