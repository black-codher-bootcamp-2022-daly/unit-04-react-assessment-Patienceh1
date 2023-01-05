import React from "react";

const BasketTotal = (props) => {
 let formatter = new Intl.NumberFormat ('en-GB', {
    style: 'currency',
    currency: 'GBP'
 })
    return (<div>{formatter.format(Math.abs(props.basketTotal))}</div>
    )
}

export default BasketTotal;