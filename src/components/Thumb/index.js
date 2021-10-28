import React from "react";

//Routing for Header
import { Link } from "react-router-dom";

//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="no Pic" />
      </Link>
    ) : (
      <Image src={image} alt="no Pic" />
    )}
  </div>
);

export default Thumb;
