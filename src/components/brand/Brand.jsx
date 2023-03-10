import React from "react";
import "./brand.scss";
import {
  googleImg,
  slackImg,
  atlassianImg,
  dropboxImg,
  shopifyImg,
} from "./import";

const images = [googleImg, slackImg, atlassianImg, dropboxImg, shopifyImg];

const imageItems = images.map((image) => (<div key={image}><img src={image} alt=''/></div>))

const Brand = () => {
  return <div className="gpt3__brand section__padding">{imageItems}</div>;
};

export default Brand;
