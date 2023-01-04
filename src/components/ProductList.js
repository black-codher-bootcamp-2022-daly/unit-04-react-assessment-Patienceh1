import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ products, ...props }) => {
  console.log(products);

  return (
    <div>
      <h1>Suggested For You</h1>{" "}
      {(!products || products.length === 0) ? (
        <h1>No items found</h1>
      ) : (
        products.map((product) => (
          <Product
            product={product}
            id={product.trackId}
            key={product.trackId}
            name={product.trackName}
            {...props}
            thumbnail={product.artworkUrl100}
            price={props.trackPrice}
            addToBasket={props.addToBasket}
            
          />
        ))
      )}
    </div>
  );
};

export default ProductList;

 ProductList.prototypes = {
 product: PropTypes.array.isRequired

 }
