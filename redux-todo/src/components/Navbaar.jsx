import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbaar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{background:"#232f3e"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"center"}}>
              Redux Todo List App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbaar;
