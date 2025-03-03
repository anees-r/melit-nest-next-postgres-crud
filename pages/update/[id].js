import React from "react";
import { useRouter } from "next/router";
import CreateBook from "@/components/home/CreateBook";
import { useEffect } from "react";

const Update = () => {
  useEffect(() => {
    document.title = "Melit - Edit Book";
    document.body.style.backgroundColor = "rgb(14, 13, 14)";
  }, []);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <CreateBook onClose={() => {}} type={"edit"} bookId={id} />
    </div>
  );
};

export default Update;
