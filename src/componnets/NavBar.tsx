import { Stack, Typography } from "@mui/material";
import logo from "../assets/diet.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

interface proops{

  window?: () => Window;
}

const drawerWidith = 250;
const navItems = ['Dairy ', 'Foods', 'Discover']


function NavBar(proops:props) {
  const {window} = proops;
  const [mobileOpen,setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState ) => !prevState)
  };


  return (

   
  );
}

export default NavBar;
