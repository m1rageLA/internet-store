import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import logo from "../assets/wieczysta.png";
import { useAuth } from "../AuthProvider";
// ======= стили поиска =======
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": { backgroundColor: alpha(theme.palette.common.black, 0.1) },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: { width: "auto" }
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" }
  }
}));
const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.3s",
  "&:hover": { color: theme.palette.text.secondary }
}));

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "background.paper", color: "text.primary", mt: 2, boxShadow: "0px 2px 8px rgba(0,0,0,0.05)", pb: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/"><img src={logo} alt="Logo" style={{ height: 40 }} /></Link>
        </Box>

        {/* nav */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <NavLink to="/">Strona Główna</NavLink>
          <NavLink to="/about">O nas</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </Box>

        {/* right side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Search>
            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            <StyledInputBase placeholder="Szukaj…" inputProps={{ "aria-label": "search" }} />
          </Search>

          {user ? (
            <>
              <Typography sx={{ mx: 1 }}>{user.displayName || user.email}</Typography>
              <Button onClick={logout} sx={{ textTransform: "none", fontWeight: 500 }}>Logout</Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" sx={{ textTransform: "none", fontWeight: 500 }}>Login</Button>
              <Button component={Link} to="/register" variant="outlined" sx={{ textTransform: "none", fontWeight: 500, borderColor: "text.secondary" }}>
                Register
              </Button>
            </>
          )}

          <IconButton color="inherit" component={Link} to="/checkout"><ShoppingCartIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
