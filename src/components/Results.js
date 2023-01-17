import React from "react";

export default function Results(props) {
  if (JSON.stringify(props.results) === "{}" && props.selectedImage === null) {
    return <div>upload a door image to see classifier results</div>;
  } else if (
    JSON.stringify(props.results) === "{}" &&
    props.selectedImage !== null
  ) {
    return <div>loading...</div>;
  } else {
    const confidences = props.results.confidences.map((c, i) => {
      const label = c.label;
      const conf = Math.round(c.confidence * 100) / 100;
      return (
        <p key={i}>
          {label}: {conf}
        </p>
      );
    });
    return (
      <div>
        <div className="label">{props.results.label}</div>
        {confidences}
      </div>
    );
  }
}
