import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FcVideoCall, FcAddImage, FcNeutralDecision } from "react-icons/fc";
import { useSelector } from "react-redux";
import FeelingsUpload from "./UplaodSection/FeelingsUpload";
import PhotoUpload from "./UplaodSection/PhotosUpload";
import VideoUpload from "./UplaodSection/VideoUpload";
const name = "Akshay";

function Upload() {
  const user = useSelector((state) => state?.singleUser?.singleUserData);

  return (
    <Box
      w={{ base: "95%", sm: "80%", md: "65%", lg: "75%" }}
      mx="auto"
      mt="0"
      borderRadius="10px"
      bgColor={"white"}
      p="3"
      paddingBottom={"1"}
    >
      <HStack spacing={3} mb="3">
        <Avatar size="sm" src={user?.userDetails?.image} />
        <Input
          type="text"
          placeholder={`What's on your mind, ${name}?`}
          size="sm"
          py="5"
          px="4"
          borderRadius={"20px"}
          bgColor="#f0f2f5"
        />
      </HStack>
      <hr />

      <HStack mt="2" justifyContent={"space-between"}>
        <VideoUpload />
        <PhotoUpload />
        <FeelingsUpload />
      </HStack>
    </Box>
  );
}

export default Upload;
