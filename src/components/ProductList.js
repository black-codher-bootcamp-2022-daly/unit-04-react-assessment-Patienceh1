import React from "react";
import Product from "./Product";



export default function ProductList ({product}) {
console.log(product)

    return (
        <div>
        {product[0] ? (
          <div>
            <h1>Basket</h1>
            <h1>{product.length}</h1>
            {product.map((product) => (
              <Product product={product} key={product.id} isInTheBasket={true} />
            ))}
          </div>
        ) : (
          <h1>No books yet</h1>
        )}
      </div>
    );
}