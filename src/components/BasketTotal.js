import React from "react";

const BasketTotal = (props) => {
 const formatter = new Intl.NumberFormat ('en-GB', {
    style: 'currency',
    currency: 'GBP'
 })
    return (<div>{formatter.format(Math.abs(props.BasketTotal))}</div>
    )
}

export default BasketTotal;