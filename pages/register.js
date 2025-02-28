import React, { useEffect } from "react";
import AppIcon from "@/graphics/app-icon.png";
import Image from "next/image";
import Link from "next/link";
import Styles from "@/styles/Home.module.css";

const Register = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(14, 13, 14)";
    document.title = "Melit - Register";
  }, []);

  return (
    <>
      <div
        className={`p-5 mx-auto ${Styles.customBg}`}
        style={{
          borderRadius: "20px",
          width: "60%",
          boxShadow: "0 0px 30px rgba(156, 89, 182, 0.6)",
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link href="/">
            <Image alt="Melit Logo" src={AppIcon} height={150} width={150} />
          </Link>
          <h1
            className=""
            style={{
              color: "#9B59B6",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Melit
          </h1>
          <p
            className="text-center"
            style={{
              color: "rgb(131, 72, 154)",
              fontSize: "15px",
            }}
          >
            Lets create an account for you!
          </p>
          <form
            className="d-flex flex-column justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            <div className="col-md-4 my-2">
              <input
                type="text"
                className="form-control text-light border-dark"
                id="name"
                style={{ backgroundColor: "rgb(76, 45, 89)" }}
                placeholder="Name"
              />
            </div>

            <div className=" col-md-4 my-2">
              <input
                type="text"
                className="form-control text-light border-dark"
                id="email"
                style={{ backgroundColor: "rgb(76, 45, 89)" }}
                placeholder="Email"
              />
            </div>

            <div className="col-md-4 my-2">
              <input
                type="password"
                className="form-control text-light border-dark"
                id="password"
                style={{ backgroundColor: "rgb(76, 45, 89)" }}
                placeholder="Password"
              />
            </div>

            <div className="text-light col-md-4 my-2">
              <button
                type="submit"
                class="btn"
                style={{
                  backgroundColor: "#9B59B6",
                  color: "white",
                  width: "100%",
                }}
              >
                Register
              </button>
            </div>
          </form>
          <p
            className="text-center"
            style={{
              color: "rgb(131, 72, 154)",
              fontSize: "15px",
            }}
          >
            Already have an account?{" "}
            <span
              className="text-center"
              style={{
                color: "#9B59B6",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <Link
                href="/login"
                className="navbar-brand"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Login!
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
