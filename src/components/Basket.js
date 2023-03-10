import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";

export default function Basket({
  removeFromBasket,
  basket,
  basketTotal,
  basketCount,
}) {
  console.log(basket);
  const count = basket.length;
  return (
    <div>
      <h1>Basket</h1>

      <BasketCount BasketCount={basketCount} count={count} />

      {basket.length > 0 ? (
        basket.map((product) => (
          <div className="product" key={product.trackId}>
            <Product
              item={product}
              key={product.trackId}
              inBasket={product.inBasket}
              removeFromBasket={removeFromBasket}
            />
          </div>
        ))
      ) : (
        <div className="empty">Sorry, no items in basket...</div>
      )}

      <h2 className="basket-total">
        Total: £
        {basketTotal === 0 ? `0:00` : <BasketTotal basketTotal={basketTotal} />}
      </h2>
    </div>
  );
}
