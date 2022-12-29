import React from "react";
import PropTypes  from "prop-types";



const Product = (props) => {
    console.log(props);

    const {product} = props 
    return (
       <div>
        <ul>
           <h2>{props.kind}</h2> 
           <h2>{props.id}</h2>
        </ul>
       </div>

    )
}

export default Product;