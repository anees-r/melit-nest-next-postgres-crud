import React, { useEffect, useState } from "react";
import AppIcon from "@/graphics/app-icon.png";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/Home.module.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {};

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(14, 13, 14)";
    document.title = "Melit - Login";
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
            Welcome back, you have been missed!
          </p>
          <form
            className="d-flex flex-column justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            <div className="col-md-4 my-2">
              <input
                type="text"
                className="form-control text-light border-dark"
                id="inptitle"
                style={{ backgroundColor: "rgb(76, 45, 89)" }}
                placeholder="Email"
              />
            </div>

            <div className=" col-md-4 my-2">
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
                class="btn"
                style={{
                  backgroundColor: "#9B59B6",
                  color: "white",
                  width: "100%",
                }}
                onClick={handleSubmit}
              >
                Login
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
            Not a member?{" "}
            <span
              className="text-center"
              style={{
                color: "#9B59B6",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <Link
                href="/register"
                className="navbar-brand"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Register now!
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
