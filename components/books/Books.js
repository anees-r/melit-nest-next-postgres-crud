"use-cliet";
import React from "react";
import BookItem from "./BookItem";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const Books = ({ uid = "" }) => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    console.log("fetching data");
    const api =
      uid === ""
        ? "http://localhost:3001/books/all"
        : `http://localhost:3001/books/by/${uid}`;
    const res = await fetch(api);
    if (!res.ok) throw new Error("Failed to fetch books");

    return res.json();
  };

  const { data = [] } = useQuery({ queryKey: ["books"], queryFn: fetchData });

  console.log(data);

  useEffect(() => {
    // fetchData();
    document.body.style.backgroundColor = "rgb(14, 13, 14)";
    document.title = "Melit - Books";
  }, [uid]);
  return (
    <div className="px-5">
      <h4 className="text-" style={{ color: "#9B59B6" }}>
        {uid === "" ? "All Books" : "Books by User"}
      </h4>

      <div className="row">
        {data.map((element) => {
          return (
            <div className="col-md-4 my-2" key={element.book_id}>
              <BookItem
                bookId={element.book_id}
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
