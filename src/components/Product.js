import React from "react";
import PropTypes from "prop-types";
import App from "../App";

const Product = (props) => {
  console.log(props);

  const { product } = props;
  return (
    <div id="product-container">
      <ul className="list">
        <h2>{props.product.trackName}</h2>
        <h2>{props.product.artistName}</h2>
        <h4>
          {props.product.trackPrice}
          {props.product.currency}
        </h4>
        <img src={props.product.artworkUrl100}
        alt={props.product.artistName} />
      </ul>
    </div>
  );
};

export default Product;
