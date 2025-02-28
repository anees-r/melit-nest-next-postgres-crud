import React from "react";
import { useRouter } from "next/router";
import Books from "@/components/books/Books";

const BookByUser = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Books uid={id} />
    </div>
  );
};

export default BookByUser;
