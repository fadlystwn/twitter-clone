// components/Widgets.tsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Widgets: React.FC = () => (
  <Box sx={{ width: 300, position: "fixed", right: 0, height: "100%", p: 2, borderLeft: "1px solid #e0e0e0" }}>
    <Typography variant="h6" fontWeight="bold">
      Trending
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="#ReactJS" />
      </ListItem>
      <ListItem>
        <ListItemText primary="#TypeScript" />
      </ListItem>
    </List>
  </Box>
);

export default Widgets;
