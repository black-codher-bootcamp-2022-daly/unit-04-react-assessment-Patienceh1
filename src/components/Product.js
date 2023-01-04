import React from "react";
import PropTypes from "prop-types";
import App from "../App";

const Product = ({product,...props}) => {
  console.log(props)

  const {  trackName, trackId, artistName, trackPrice, currency, artworkUrl100 } = product ;
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
      <div className="buttons">
        {product.isInTheBasket ? 
      <button  id="add-button" onClick={() => props.removeFromBasket(trackId)}> Remove</button> :
      <button  id="add-button" onClick={() => props.addToBasket(trackId)}> Add to basket</button>
        }
      </div>
    </div>
  );
};

export default Product;
