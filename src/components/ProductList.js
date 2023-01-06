import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ products, ...props }) => {
  console.log(products);

  return (
    <div>
      <h1 className="title">Suggested For You</h1>{" "}
      {(!products || products.length === 0) ? (
        <div className="empty">No items found</div>
      ) : (
        products.map((product) => (
            <div className="product" key={item.trackId}>
          <Product
            item={product}
            id={product.trackId}
            key={product.trackId}
            name={product.trackName}
            {...props}
            thumbnail={product.artworkUrl100}
            price={props.trackPrice}
            addToBasket={props.addToBasket}
            
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
