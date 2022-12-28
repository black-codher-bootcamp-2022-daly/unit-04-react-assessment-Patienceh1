import React from "react";
import PropTypes  from "prop-types";



const Product = (props) => {
    console.log(props);

    const {product} = props 
    return (
       <div>
        <ul>
           <h2>{product.kind}</h2> 
        </ul>
       </div>

    )
}

export default Product;