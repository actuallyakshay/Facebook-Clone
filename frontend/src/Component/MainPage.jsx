import { Box, Button, Grid, HStack } from "@chakra-ui/react";
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
import { useState } from "react";

function MainPage() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state?.post?.postsData);

  let postData = posts.reverse();

  let token = localStorage.getItem("token");

  let [email, id, password] = token.split(":");
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getAllPOSTS(page));
    dispatch(getSingleUserDetails(id));
    dispatch(get_stories());
  }, [dispatch, page]);

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
        <Box>
          <Slidertab postData={postData} />
          <HStack w="full" justifyContent={"center"} mt="3">
            <Button
              bg="white"
              borderRadius="0px"
              onClick={() => setPage(page - 1)}
            >
              prev
            </Button>
            <Button bg="white" borderRadius="0px">
              {page}
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              bg="white"
              borderRadius="0px"
            >
              Next
            </Button>
          </HStack>
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <Online />
        </Box>
      </Grid>
    </>
  );
}

export default MainPage;
