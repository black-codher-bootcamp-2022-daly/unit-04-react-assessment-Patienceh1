import React from "react";
import PropTypes from "prop-types";


const Product = ({item,...props}) => {
  // console.log(props)

  const {  trackName, trackId, artistName, trackPrice, artworkUrl100 } = item ;
  return (
    <div className={"product-container"}>
        <img src={artworkUrl100}
        alt={artistName} />
      <div id={"product-items"}>
        <h3>{trackName}</h3>
        <h3>{artistName}</h3>
        <h4 className="price">{trackPrice?"£"+trackPrice:"0"} </h4>
      </div>
      <div className="buttons">
        {item.inBasket ? 
      <button  id="add-button" onClick={() => props.removeFromBasket(trackId)}> Remove</button> :
      <button  id="add-button" onClick={() => props.addToBasket(trackId)}> Add to basket</button>
        }
      </div>
    </div>
  );
};

export default Product;

Product.propTypes ={
    trackPrice: PropTypes.number
}