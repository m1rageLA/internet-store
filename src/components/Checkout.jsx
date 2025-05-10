import React from "react";
import { useCart } from "../context/CartContext";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Checkout() {
  const { products, removeFromCart } = useCart();
  const total = products.reduce((sum, p) => sum + p.price * p.amount, 0);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {products.map((product, i) => (
              <TableRow key={product.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <img
                    src={product.image || "https://placehold.co/100x100"}
                    alt={product.title}
                    width={60}
                  />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price.toFixed(2)} zł</TableCell>
                <TableCell>{product.amount}</TableCell>
                <TableCell>{(product.price * product.amount).toFixed(2)} zł</TableCell>
                {/* кнопка удаления */}
                <TableCell>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: 'right', mt: 2 }}>
        Suma: <b>{total.toFixed(2)} zł</b>
        <Button variant="contained" sx={{ ml: 2 }}>
          Zamawiam
        </Button>
      </Box>
    </Box>
  );
}
