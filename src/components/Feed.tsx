import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";
import { TweetState, TweetType } from "../store/types"; 

const Feed: React.FC = () => {
  const tweets = useSelector((state: { tweet: TweetState }) => state.tweet.tweets);
  console.log(tweets.length);
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, borderBottom: "1px solid #e0e0e0" }}>
        <TextField variant="outlined" multiline rows={3} placeholder="What's happening?" fullWidth />
        <Button variant="contained" sx={{ mt: 2, alignSelf: "flex-end" }}>
          Tweet
        </Button>
      </Box>
      {tweets && tweets.map((tweet: TweetType) => (
        <Tweet key={tweet.id} tweet={tweet}/>
      ))}
    </Box>
  );
};

export default Feed;
