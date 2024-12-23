export interface TweetType {
  id?: string;
  username: string;
  avatar: string;
  content: string;
}

export interface TweetState {
  tweets: TweetType[];
}
