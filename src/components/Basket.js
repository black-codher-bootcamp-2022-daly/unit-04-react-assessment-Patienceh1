import React from "react";
import Product from "./Product";



export default function Basket ({basket}) {
 console.log(basket)

    return (
        <div>
        {basket ? (
          <div>
            <h1>Basket</h1>
            <h1>{basket.length}</h1>
            {basket.map((product) => (
              <Product product={product} key={product.trackId} isInTheBasket={true} />
            ))}
          </div>
        ) : (
          <h1>No products yet</h1>
        )}
      </div>
    );
}