import React from "react";
import ImgUpload from "./ImgUpload";

const Document = () => {
  return (
    <div>
      <h1 className="branch_heading">Important Documents</h1>
      <div className="px-2">
        <ImgUpload title="1. Passport Size Photo" name="id_card_img" />
        <ImgUpload title="2. Trade Licence" name="personal_img" />
        <ImgUpload title="3. NID Card Photo" name="trade_licence_img" />
      </div>
    </div>
  );
};

export default Document;
