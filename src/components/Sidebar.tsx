// components/Sidebar.tsx
import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar: React.FC = () => (
  <Box sx={{ width: 250, position: "fixed", height: "100%", borderRight: "1px solid #e0e0e0" }}>
    <List>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  </Box>
);

export default Sidebar;
