import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

interface TweetProps {
  tweet: {
    name: string;
    username: string;
    content: string;
    avatar?: string;
  };
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <Box sx={{ display: "flex", p: 2, borderBottom: "1px solid #e0e0e0" }}>
      <Avatar 
        src={tweet?.avatar ? tweet.avatar : 'fallbackAvatar.png'} 
        alt={tweet?.name} 
        sx={{ mr: 2 }} 
      />
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {tweet.name}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          @{tweet.username}
        </Typography>
        <Typography variant="body1">{tweet.content}</Typography>
      </Box>
    </Box>
  );
};

export default Tweet;
