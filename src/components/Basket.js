import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";



export default function Basket ({removeFromBasket, basket, basketTotal}) {
 console.log(basket)
const count = basket.length;
    return (
        <div>
        {count > 0 ? (
          <div>
            <h1>Basket</h1>
            <BasketCount BasketCount={count}/>
            
            {/* <h1>{basket.length}</h1> */}
            {basket.map((product) => (
              <Product product={product} key={product.trackId} isInTheBasket={true} removeFromBasket={removeFromBasket} />
            ))}
          </div>
        ) : (
          <h1>No products yet</h1>
        )}
        <BasketTotal basketTotal={basketTotal} />
      </div>
    );
}