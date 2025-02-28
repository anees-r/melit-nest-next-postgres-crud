import React from "react";
import Styles from "@/styles/Home.module.css";

const BlurBackground = () => {
  return (
    <>
      <div>
        <div
          className={`position-fixed top-50 start-50 my-5 ${Styles.blurbg}`}
          style={{
            height: "500px",
            width: "500px",
            borderRadius: "1000px",
            zIndex: "100",
          }}
        ></div>
      </div>
    </>
  );
};

export default BlurBackground;
