import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const getClassName = (path) => {
    return router.pathname === path ? "active" : "";
  };

  return (
    <div className="navigation">
      <ul>
        <li className={getClassName("/")}>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li className={getClassName("/favorites")}>
          <Link href="/favorites" legacyBehavior>
            <a>My favorites films</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
