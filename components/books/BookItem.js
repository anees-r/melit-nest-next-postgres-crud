import React from "react";
import Styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import EditIcon from "@/graphics/edit-icon.png";
import DeleteIcon from "@/graphics/delete-icon.png";
import { useRouter } from "next/router";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const BookItem = (props) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:3001/books/delete/${props.bookId}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      router.push("/");
    } else {
      throw new Error("FAILED: Could not process request!");
    }
  };

  const deleteMutation = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      // queryClient.refetchQueries(["books"]);
    },
  });

  return (
    <div>
      <div className={`card my-3 mx-3 shadow-lg ${Styles.customBgCard}`}>
        <div className="d-flex flex-row justify-content-between align-items-center">
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
          <div>
            <Link href={`/update/${props.bookId}`}>
              <Image
                alt="edit icon"
                className="mx-2"
                src={EditIcon}
                width={20}
                height={20}
                style={{ cursor: "pointer" }}
              ></Image>
            </Link>
            <Image
              alt="delete icon"
              className="mx-2"
              src={DeleteIcon}
              width={20}
              height={20}
              style={{ cursor: "pointer" }}
              onClick={deleteMutation.mutate}
            ></Image>
          </div>
        </div>
        <div className="card-body text-light">
          <h5 className="card-text text-light">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
