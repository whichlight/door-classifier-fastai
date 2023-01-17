import React from "react";

export default function Example(props) {
  return (
    <div className="example">
      <img src={props.src} onClick={() => props.setSelectedImage(props.src)} />
    </div>
  );
}
