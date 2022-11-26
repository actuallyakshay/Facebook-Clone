import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Stories";
import Sidebar from "../Pages/Sidebar";
import Slidertab from "./Slidertab";
import Online from "./Online";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPOSTS, getPOSTS } from "../redux/Posts/post.actions";
import { getSingleUserDetails } from "../redux/SingleUserDetail/single.actions";
import Navbar from "./Navbar";
import { get_stories } from "../redux/Story/story.actions";

function MainPage() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state?.post?.postsData);

  let postData = posts.reverse();

  let token = localStorage.getItem("token")
  
  let [email,id,password] = token.split(":")

  useEffect(() => {
    dispatch(getAllPOSTS());
    dispatch(getSingleUserDetails(id));
    dispatch(get_stories());
  }, [dispatch]);

  console.log({id})

  return (
    <>
      <Navbar />
      <Grid
        gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 2fr 1fr" }}
        display={{ base: "flex", lg: "grid" }}
        w="100%"
        bgColor={"#f0f2f5"}
      >
        <Sidebar />
        <Slidertab postData={postData} />
        <Box display={{ base: "none", lg: "flex" }}>
          <Online />
        </Box>
      </Grid>
    </>
  );
}

export default MainPage;
