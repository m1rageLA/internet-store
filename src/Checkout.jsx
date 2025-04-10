import React, {useState} from "react";
import { Grid, Container } from '@mui/material';
import CheckoutItem from "./CheckoutItem.jsx";

const Checkout = ({ products }) => {
    const [product_sum, product_sum_set] = useState(0);

    return (
        <Container sx={{ mt: 4, maxWidth: '1200px' }}>
        <Grid container spacing={1}>  {}
            {products.map((product, index) => (
                <CheckoutItem {...product} />
            ))}
        </Grid>
            <div>
                {/* Sum */}
                Suma: <span class="priceTag"><b>10,99 zł</b></span>
                {/* Next button */}
                <button type="button" class="btn btn-success"><strong>Zamawiam</strong></button>
            </div>
        </Container>
    );
}

export default Checkout;