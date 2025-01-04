export interface TweetType {
  id?: string;
  name: string;
  username: string;
  avatar: string;
  content: string;
}

export interface TweetState {
  tweets: TweetType[];
}
