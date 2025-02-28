"use-client";
import React from "react";
import Styles from "@/styles/Home.module.css";
import Image from "next/image";
import CrossIconW from "@/graphics/cross-icon-w.png";
const CreateBook = (props) => {
  return (
    <div
      className={`p-5 text-light ${Styles.customBg} position-absolute top-50 start-50 translate-middle`}
      style={{
        borderRadius: "20px",
        width: "60%",
        boxShadow: "0 0px 30px rgba(156, 89, 182, 0.6)",
        zIndex: 80,
      }}
    >
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-4">
          <h6 className="text-light">Plese enter the name of the book:</h6>
          <Image
            src={CrossIconW}
            width={30}
            style={{ cursor: "pointer" }}
            onClick={props.onClose}
          ></Image>
        </div>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Title"
            aria-label="Search"
          />
          <button
            class="btn"
            style={{ backgroundColor: "#9B59B6", color: "white" }}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
