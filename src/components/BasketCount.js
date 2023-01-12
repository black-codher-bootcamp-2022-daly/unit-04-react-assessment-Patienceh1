import React from "react";


function BasketCount  (props)  {


    return (
<div className="basket-count">
    {props.basketCount}
     product{props.basketCount!==0?"s":""}
</div>
    );
}



export default BasketCount;