import React from "react";
import { Box } from "@mui/material";
import Tweet from "./Tweet";
import TweetForm from "./TweetForm";
import { useSelector } from "react-redux";
import { TweetState, TweetType } from "../store/types"; 

const Feed: React.FC = () => {
  const tweets = useSelector((state: { tweet: TweetState }) => state.tweet.tweets);
 
  return (
    <Box>
      <TweetForm/>
      {tweets && tweets.map((tweet: TweetType) => (
        <Tweet key={tweet.id} tweet={tweet}/>
      ))}
    </Box>
  );
};

export default Feed;
