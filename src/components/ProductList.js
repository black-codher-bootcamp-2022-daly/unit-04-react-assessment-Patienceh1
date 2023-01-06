import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, ...props }) => {
  console.log(items);

  return (
    <div>
      <h1 className="title">Suggested For You</h1>{" "}
      {(!items || items.length === 0) ? (
        <div className="empty">No items found...</div>
      ) : (
        items.map((product) => (
            <div className="product" key={product.trackId}>
          <Product
            item={product}
            id={product.trackId}
            key={product.trackId}
            name={product.trackName}
            {...props}
            thumbnail={product.artworkUrl100}
            price={props.trackPrice}
            addToBasket={props.addToBasket}
            removeFromBasket={props.removeFromBasket}
          />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;

 ProductList.prototypes = {
 product: PropTypes.array.isRequired

 }
