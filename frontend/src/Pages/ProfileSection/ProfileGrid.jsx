import { Box, Grid, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsHandIndexFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import PostComponent from "../../Component/DataSection/PostComponent";
import Upload from "../../Component/Upload";
import BioSection from "./BioSection";

function ProfileGrid({ userPosts }) {
  return (
    <Box w="100%" bg="#f0f2f5">
      <br />
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 2fr" }}
        w={{ base: "95%", sm: "95%", md: "80%", lg: "78%" }}
        gap="0"
        m="auto"
        position={"relative"}
      >
        <BioSection />
        <VStack h="400vh" pt="0" w="full">
          {userPosts?.map((elem, index) => {
            return <PostComponent key={index} elem={elem} />;
          })}
        </VStack>
      </Grid>
    </Box>
  );
}

export default ProfileGrid;
