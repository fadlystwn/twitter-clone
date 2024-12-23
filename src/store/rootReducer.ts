import { combineReducers } from '@reduxjs/toolkit';
import tweetReducer from './slices/tweet/tweetSlice';

// Combine reducers
const rootReducer = combineReducers({
  tweet: tweetReducer,
});

// Define the RootState type which represents the entire Redux state
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
