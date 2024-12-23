import React, { useEffect } from "react";
import { Grid2 } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Feed from "../components/Feed";
import { fetchTweet } from "../store/slices/tweet/tweetSlice";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();

 
  useEffect(() => {
    const url = 'https://zmzapqjovomxukcxntlu.supabase.co/rest/v1/tweets';
    
    const fetchData = async() => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptemFwcWpvdm9teHVrY3hudGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MjAzMTEsImV4cCI6MjA1MDQ5NjMxMX0.Jep6xGzjunC8H0GNaHzWfiLsqGwn5OpQdCVKu_OXiL0'
          }
        });
        const data = await response.json();
       if(response.ok){
         dispatch(fetchTweet(data));
       }
      } catch (error) {
        console.log('error', error);
      }
      
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <Sidebar />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Feed />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <Widgets />
        </Grid2>
      </Grid2>
    </>
  );
};

export default App;
