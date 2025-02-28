import React from "react";
import Styles from "@/styles/Home.module.css";
import Link from "next/link";

const BookItem = (props) => {
  return (
    <div>
      <div className={`card my-3 mx-3 shadow-lg ${Styles.customBgCard}`}>
        <p className="card-header text-light">
          By:{" "}
          <Link
            className="navbar-brand"
            href={`/books/by/${props.userId}`}
            style={{
              color: "rgb(179, 99, 211)",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {props.by}
          </Link>
        </p>
        <div className="card-body text-light">
          <h5 className="card-text text-light">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
