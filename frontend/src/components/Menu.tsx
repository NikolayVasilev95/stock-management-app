import React from "react";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ApartmentIcon from "@mui/icons-material/Apartment";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Paths {
  path: string;
  text: string;
  icon: React.ReactNode;
}

interface DrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export const Menu = ({ open, handleDrawerClose }: DrawerProps) => {
  const theme = useTheme();

  const paths: Paths[] = [
    { path: "/", text: "Home", icon: <HomeIcon /> },
    { path: "/about", text: "About", icon: <InfoIcon /> },
  ];

  const pathsTwo: Paths[] = [
    { path: "/products", text: "Products", icon: <Inventory2Icon /> },
    { path: "/warehouses", text: "Warehouses", icon: <ApartmentIcon /> },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {paths.map(({ text, path, icon }) => (
          <ListItem key={text} disablePadding>
            <Link
              to={path}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {pathsTwo.map(({ text, path, icon }) => (
          <ListItem key={text} disablePadding>
            <Link
              to={path}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} color="inherit" />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
