import React from "react";
import PropTypes from "prop-types";
import App from "../App";

const Product = (props) => {
  console.log(props);

  const { product } = props;
  return (
    <div>
      <ul>
        <h2>{props.product.trackName}</h2>
        <h3>{props.product.artistName}</h3>
        <h4>
          {props.product.trackPrice}
          {props.product.currency}
        </h4>
        <img src={props.product.artworkUrl100} />
      </ul>
    </div>
  );
};

export default Product;
