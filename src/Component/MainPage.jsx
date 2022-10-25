import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Stories";
import Sidebar from "../Pages/Sidebar";
import Slidertab from "./Slidertab";
import Online from "./Online";

function MainPage() {
  return (
    <>
      <Grid
        gridTemplateColumns={{ base: "1fr 1fr", lg: "1fr 2fr 1fr" }}
        // gap={{ base: "6", lg: "5" }}
        // border="2px solid green"
        display={{ base: "flex", lg: "grid" }}
        w="100vw"
        bgColor={"#f0f2f5"}
      >
        <Sidebar />
        {/* <Carousel /> */}
        <Slidertab />
        <Box  display={{ base: "none", lg: "flex" }}>
         <Online />
        </Box>
      </Grid>
   
    </>
  );
}

export default MainPage;
