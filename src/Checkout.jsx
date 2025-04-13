import React, {useState} from "react";
import { Box, Container, Button, Paper, TableContainer, Table, TableBody, TableCell, TableRow } from '@mui/material';
import CheckoutItem from "./CheckoutItem.jsx";

const Checkout = ({ products }) => {
    const total = products.reduce((sum, product) => sum + product.price * product.amount, 0);

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {products.map((product, index) => (
                        <TableRow>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell><img src={product.image || "https://placehold.co/100x100"}></img></TableCell>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.price.toFixed(2)} zł</TableCell>
                            <TableCell>{product.amount}</TableCell>
                            <TableCell>{product.price * product.amount} zł</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ textAlign: 'right', mt: 2 }}>
                {/* Sum */}
                Suma: <span className="priceTag"><b>{total.toFixed(2)} zł</b></span>
                {/* Next button */}
                <Button variant="contained">Zamawiam</Button>
            </Box>
        </Box>
    );
}

export default Checkout;