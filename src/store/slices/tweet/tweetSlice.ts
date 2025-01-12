import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TweetState, TweetType } from '../../types';

const initialState: TweetState = {
  tweets: [], loading: false, error: null 
};

const tweetSlice = createSlice({
  name: 'tweetSlice',
  initialState,
  reducers: {
    fetchTweet: (state, action: PayloadAction<TweetType[]>) => {
      state.tweets = [...action.payload];
    },
    
    addTweet: (state, action: PayloadAction<TweetType>) => {
      state.tweets = [...state.tweets, action.payload]; 
    },

    
    deleteTweet: (state, action: PayloadAction<string>) => {
      state.tweets = state.tweets.filter(tweet => tweet.id !== action.payload);
    },

    updateTweet: (state, action: PayloadAction<TweetType>) => {
      state.tweets = state.tweets.map(tweet =>
        tweet.id === action.payload.id ? action.payload : tweet
      ); 
    },
  },
});

export const { addTweet, deleteTweet, updateTweet, fetchTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
