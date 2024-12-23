import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div">
        Twitter Clone
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
