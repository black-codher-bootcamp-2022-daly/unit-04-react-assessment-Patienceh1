import React from "react";
import PropTypes from "prop-types";
import App from "../App";

const Product = ({product,...props}) => {
  console.log(props)

  const {  trackName, trackId, artistName, trackPrice, currency, artworkUrl100 } = product ||{} ;
  return (
    <div id={"product-container"}>
        <img src={artworkUrl100}
        alt={artistName} />
      <ul className="list">
        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        <h4>
          {trackPrice}
          {currency}
        </h4>
      </ul>
      <button  id="add-button" onClick={() => props.addToBasket(trackId)}> { props.isInTheBasket ? "Remove" : "Add to basket"}</button>
    </div>
  );
};

export default Product;
