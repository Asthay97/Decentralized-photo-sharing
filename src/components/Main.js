import React, { useState } from "react";
import UploadImages from "./UploadImages.js";
import "./Main.css";
import Identicon from "identicon.js";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

function Main(props) {
  return (
    <div className="main_body">
      <div className="display_images">
        {props.images.map((image, key) => {
          return (
            <div className="card" key={key}>
              <div className="card_header">
                <div className="header_identicon">
                  <img
                    src={`data:image/png;base64,${new Identicon(
                      image.author,
                      30
                    ).toString()}`}
                  />
                </div>
                <div className="author">{image.author}</div>
              </div>
              <img
                className="image_ipfs"
                src={`https://ipfs.infura.io/ipfs/${image.hash}`}
              />
              <div className="total_tip">
                <span id="textSpan" style={{ fontWeight: "bold" }}>
                  TIPS:
                </span>{" "}
                {window.web3.utils.fromWei(image.tipAmount.toString(), "Ether")}{" "}
                ETH
                <button
                  className="tip_button"
                  name={image.id}
                  onClick={(event) => {
                    let tipAmount = window.web3.utils.toWei("0.1", "Ether");
                    console.log(event.target.name, tipAmount);
                    props.tipImageOwner(event.target.name, tipAmount);
                  }}
                >
                  TIP
                </button>
              </div>
              <div className="img_desc">{image.description}</div>
            </div>
          );
        })}
      </div>
      <div className="main_upload_image">
        <UploadImages
          images={props.images}
          captureFile={props.captureFile}
          uploadImage={props.uploadImage}
          tipImageOwner={props.tipImageOwner}
        />
      </div>
    </div>
  );
}

export default Main;
