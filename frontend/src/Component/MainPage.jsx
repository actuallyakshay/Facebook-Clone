import { Box, Button, Container, Grid, HStack } from "@chakra-ui/react";
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
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);

  let postData = posts.reverse();

  const [page, setPage] = useState(1);
  let token = localStorage.getItem("token");
  let email, id, password;

  if (isAuth) {
    [email, id, password] = token.split(":");
  }

  console.log({ id });

  useEffect(() => {
    dispatch(getAllPOSTS(page));
    dispatch(get_stories());
    if (isAuth) {
      dispatch(getSingleUserDetails(id));
    }
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

          <HStack w="50%" m="auto" justifyContent={"center"} mt="3">
            <Button
              bg="white"
              borderRadius="0px"
              onClick={() => setPage(page - 1)}
              disabled={page == 1 ? true : false}
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
