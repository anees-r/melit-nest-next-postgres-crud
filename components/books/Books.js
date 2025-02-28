import React from "react";
import BookItem from "./BookItem";

const Books = () => {
  return (
    <div className="px-5">
      <h4 className="" style={{ color: "#9B59B6" }}>
        All Books
      </h4>
      <div className="row">
        <div className="col-md-4 my-2">
          <BookItem />
        </div>
        <div className="col-md-4 my-2">
          <BookItem />
        </div>
        <div className="col-md-4 my-2">
          <BookItem />
        </div>
      </div>
    </div>
  );
};

export default Books;
