import React from "react";
import Styles from "@/styles/Home.module.css";

const BookItem = () => {
  return (
    <div>
      <div className={`card my-3 mx-3 shadow-lg ${Styles.customBgCard}`}>
        <h6
          className="card-header"
          style={{ color: "#9B59B6", fontWeight: "bold" }}
        >
          Dummy Book Name
        </h6>
        <div className="card-body text-light">
          <p className="card-text text-light">By: DummyUser</p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
