import React, { useState } from "react";
import "./UploadImages.css";
function UploadImages(props) {
  const [imageDescription, setImageDescription] = useState(undefined);
  return (
    <div className="upload_images">
      <h3>SHARE IMAGE</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const description = imageDescription.value;
          props.uploadImage(description);
        }}
      >
        <input
          className="browse_button"
          type="file"
          accept=".jpg, .jpeg, .png, .bmp, .gif"
          onChange={props.captureFile}
        />
        <div className="image_description">
          <input
            id="imageDescription"
            type="text"
            ref={(input) => {
              setImageDescription(input);
            }}
            placeholder="Image description..."
            required
          />
        </div>
        <div className="upload_button">
          <button type="submit">UPLOAD</button>
        </div>
      </form>
    </div>
  );
}

export default UploadImages;
