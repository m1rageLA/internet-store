import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import logo from "../assets/wieczysta.png";

// Поиск
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Стили для ссылок
const NavLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.grey[300],
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Левая часть */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />

        </Box>

        {/* Центр — поиск */}

        <Box sx={{ display: "flex", gap: 3 }}>
          <NavLink to="/">Strona Główna</NavLink>
          <NavLink to="/about">O nas</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </Box>



        {/* Справа — корзина */}
        <Box sx={{display: "flex", gap: 5}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Szukaj…" inputProps={{ "aria-label": "search" }} />
          </Search>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
