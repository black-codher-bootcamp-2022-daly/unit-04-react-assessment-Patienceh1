import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";



export default function Basket ({removeFromBasket, basket, basketTotal}) {
 console.log(basket)
const count = basket.length;
    return (
        <div>
        {basket.length > 0 ? (
          <div>
            <h1>Basket</h1>
            <BasketCount BasketCount={count}/>
            
            {/* <h1>{basket.length}</h1> */}
            {basket.map((product) => (
                <div className="product" key={product.trackId}>
              <Product item={product} key={product.trackId} inBasket={product.inBasket} removeFromBasket={removeFromBasket} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">Sorry no items in basket...</div>
        )}
        <BasketTotal basketTotal={basketTotal} />
      </div>
    );
}