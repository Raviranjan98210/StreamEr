import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui inverted  menu">
      <Link to="/" className="item ">
        StreamEr
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>

        <Link to="/" className="ui item">
          <GoogleAuth />
        </Link>
      </div>
    </div>
  );
};

export default Header;
