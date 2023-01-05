import React from "react";


const BasketCount = (props) => {


    return (
<div className="basket-count">
    {props.BasketCount} {props.BasketCount!==1?"products":"product"}
</div>
    );
}



export default BasketCount;