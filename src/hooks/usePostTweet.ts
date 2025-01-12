import { useState } from "react";

interface TweetData {
  tweet: string;
}

export const usePostTweet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postTweet = async (data: TweetData) => {
    setIsLoading(true);
    setError(null);

    try { 
      const response = await fetch("/api/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to post the tweet");
      }

      console.log("Tweet posted successfully!");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { postTweet, isLoading, error };
};
