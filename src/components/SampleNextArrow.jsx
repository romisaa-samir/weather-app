import React from "react";

export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-50px" }}
      onClick={onClick}
    />
  );
}
