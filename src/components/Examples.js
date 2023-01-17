import React from "react";
import Example from "./Example";

export default function Examples(props) {
  const links = [
    "blue.jpg",
    "closed-door.jpg",
    "open-door.jpg",
    "crack_1.jpg",
    "green.jpg",
    "inside.jpg",
    "old.jpg",
    "red_arch.jpg",
    "red.jpg",
  ];
  const linkElements = links.map((link, i) => {
    return (
      <Example
        key={i}
        src={require("../images/" + link)}
        setSelectedImage={props.setSelectedImage}
      />
    );
  });

  return <div className="examples">{linkElements}</div>;
}
