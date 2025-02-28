"use-cliet";
import React from "react";
import BookItem from "./BookItem";
import { useState, useEffect } from "react";

const Books = ({ uid = "" }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const api =
        uid === ""
          ? "http://localhost:3001/books/all"
          : `http://localhost:3001/books/by/${uid}`;
      await fetch(api)
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((err) => console.error("Error fetching books:", err));
    }
    fetchData();
    document.body.style.backgroundColor = "rgb(14, 13, 14)";
    document.title = "Melit - User Books";
  }, [uid]);
  return (
    <div className="px-5">
      <h4 className="text-" style={{ color: "#9B59B6" }}>
        {uid === "" ? "All Books" : "Books by User"}
      </h4>

      <div className="row">
        {books.map((element) => {
          return (
            <div className="col-md-4 my-2" key={element.book_id}>
              <BookItem
                title={element.book_title}
                by={element.user_name}
                userId={element.user_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
