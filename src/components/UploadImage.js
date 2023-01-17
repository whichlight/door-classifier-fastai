import React from "react";

export default function UploadImage(props) {
  return (
    <div className="upload">
      <form>
        <label>
          <span>Select Image: </span>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              props.setSelectedImage(
                URL.createObjectURL(event.target.files[0])
              );
            }}
          />
        </label>
      </form>
      {props.selectedImage && (
        <div>
          <img
            id="input-image"
            className="display-image"
            alt="not found"
            width={"250px"}
            src={props.selectedImage}
          />
        </div>
      )}
    </div>
  );
}
