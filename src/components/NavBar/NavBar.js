import React from "react";
import Link from "../Link/Link";

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/brewday" className="item">
        Brew Day
      </Link>
      <Link href="/notes" className="item">
        Notes
      </Link>
      <Link href="/contact" className="item">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
