import React from "react";
import Link from "next/link";
import AppIcon from "@/graphics/app-icon.png";
import UserIcon from "@/graphics/user-icon.png";
import Image from "next/image";
import Styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <div>
      <div
        className={`d-flex position-fixed justify-content-between align-items-center ${Styles.customBg}`}
        style={{
          height: "55px",
          width: "100%",
          zIndex: "100",
          boxShadow: "0 -10px 30px rgba(156, 89, 182, 0.6)",
        }}
      >
        <Link className="mx-4" href="/">
          <Image src={AppIcon} alt="Melit Logo" width={30} />
        </Link>
        <Link
          className="navbar-brand"
          href="/"
          style={{
            color: "#9B59B6",
            textDecoration: "none",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          melit.
        </Link>
        <Link className="mx-4" href="/login">
          <Image src={UserIcon} alt="User Profile" width={25} height={25} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
