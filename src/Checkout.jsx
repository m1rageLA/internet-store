import React, {useState} from "react";
import CheckoutItem from "./CheckoutItem.jsx";

function Checkout() {

    return (
        <div id="frame">
            <div>
                {/* Checkout items */}
                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />
                <CheckoutItem />
            </div>
            
            <div>
                {/* Sum */}
                Suma: <span class="priceTag"><b>10,99 zł</b></span>
                {/* Next button */}
                <button type="button" class="btn btn-success"><strong>Zamawiam</strong></button>
            </div>
            
        </div>
    );
}

export default Checkout;