import React, {useState} from "react";
import { Box, Container, Button, Paper, TableContainer, Table, TableBody, TableCell, TableRow } from '@mui/material';
import CheckoutItem from "./CheckoutItem.jsx";

const Checkout = ({ products }) => {
    const [product_sum, product_sum_set] = useState(0);

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow></TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ textAlign: 'right', mt: 2 }}>
                {/* Sum */}
                Suma: <span className="priceTag"><b>10,99 zł</b></span>
                {/* Next button */}
                <Button variant="contained">Zamawiam</Button>
            </Box>
        </Box>
    );
}

export default Checkout;