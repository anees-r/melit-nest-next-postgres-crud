"use-client";
import AddIcon from "@/graphics/add-icon.png";
import Image from "next/image";

import React from "react";

const AddButton = (props) => {
  return (
    <button
      className={`btn position-fixed bottom-0 end-0`}
      style={{ borderRadius: "100px", zIndex: "800" }}
      onClick={props.onClick}
    >
      <Image src={AddIcon} width={40} height={40} alt="add book icon"></Image>
    </button>
  );
};

export default AddButton;
