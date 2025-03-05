// "use-client";
import React from "react";
import Styles from "@/styles/Home.module.css";
import Image from "next/image";
import CrossIconW from "@/graphics/cross-icon-w.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Error from "next/error";
import CustomAuth from "../hoc/CustomAuth";

const CreateBook = (props) => {
  const [title, setTitle] = useState("");
  const [createNew, setCreateNew] = useState(false);
  const router = useRouter();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (props.type === "new") {
      setCreateNew(true);
    }
  }, []);

  const handleNew = async () => {
    const res = await fetch("http://localhost:3001/books/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        custom_auth: props.custom_auth,
      },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      setTitle("");
      props.onClose();
    } else {
      const errorData = await res.json();
      console.log(errorData);
      throw new Error(errorData.message || "Error!");
    }

    return res.json;
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3001/books/update/${props.bookId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // custom_auth: props.custom_auth,
        },
        body: JSON.stringify({ title }),
      }
    );

    if (res.ok) {
      setTitle("");
      if (props.type === "new") {
        props.onClose();
      } else {
        router.push("/");
      }
      return res.json;
    } else {
      const errorData = await res.json();
      console.log(errorData);
      throw new Error(errorData.message || "Error!");
    }
  };

  const newMutation = useMutation({
    mutationFn: handleNew,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const editMutation = useMutation({
    mutationFn: handleEdit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

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
            alt="Close Icon"
          ></Image>
        </div>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <div
            className="btn"
            style={{ backgroundColor: "#9B59B6", color: "white" }}
            onClick={createNew ? newMutation.mutate : editMutation.mutate}
          >
            {createNew ? "Add" : "Update"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomAuth(CreateBook);
