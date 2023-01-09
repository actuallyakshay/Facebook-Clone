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
import { Navigate } from "react-router-dom";
import Loader from "../utils/Loader";

function MainPage() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state?.post?.postsData);
  const postLoading = useSelector((state) => state?.post?.postLoading);
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);

  const [page, setPage] = useState(1);
  let token = localStorage.getItem("token");
  let email, id, password;

  if (isAuth) {
    [email, id, password] = token.split(":");
  }

  useEffect(() => {
    dispatch(getAllPOSTS(page));
    dispatch(get_stories());
    if (isAuth) {
      dispatch(getSingleUserDetails(id));
    }
  }, [dispatch, page]);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <Grid
        gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 2fr 1fr" }}
        display={{ base: "flex", lg: "grid" }}
        w="100%"
        bgColor={"#f0f2f5"}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <Sidebar />
        </Box>
        <Box>
          <Slidertab postData={postData} />

          <HStack w="50%" m="auto" justifyContent={"center"} mt="3">
            <Button
              bg="white"
              borderRadius="0px"
              onClick={() => setPage(page - 1)}
              disabled={page == 1 ? true : false}
              border={"1px solid #E8E8E8"}
            >
              prev
            </Button>
            <Button border="1px dashed gray" bg="white" borderRadius="0px">
              {page}
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              bg="white"
              borderRadius="0px"
              border={"1px solid #E8E8E8"}
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
