import React, {useState} from "react";
import { Box, Container, Button, Paper, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import CheckoutItem from "./CheckoutItem.jsx";

const Checkout = ({ products }) => {
    const total = products.reduce((sum, product) => sum + product.price * product.amount, 0);

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
            <Box sx={{ textAlign: 'left', mt: 2 }}>
                <span className="priceTag"><h2>Koszyk</h2></span>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lp.</TableCell>
                            <TableCell>Zdjęcie</TableCell>
                            <TableCell>Nazwa produktu</TableCell>
                            <TableCell>Cena za szt.</TableCell>
                            <TableCell>Ilość</TableCell>
                            <TableCell>Wartość</TableCell>
                        </TableRow>
                    </TableHead>
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