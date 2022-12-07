import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcVideoCall, FcAddImage, FcNeutralDecision } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../redux/Posts/post.actions";
import FeelingsUpload from "./UplaodSection/FeelingsUpload";
import PhotoUpload from "./UplaodSection/PhotosUpload";
import VideoUpload from "./UplaodSection/VideoUpload";

function Upload() {
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const [input, setInput] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data?.token);

  const handleChnage = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      let body = {
        posts: {
          caption: input,
        },
      };
      dispatch(uploadPost(body, token));
      toast({
        title: `Hey !! ${user?.fName} `,
        description: "Congrats !! post uploaded successfully",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setInput("");
    }
  };

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
          placeholder={`What's on your mind, ${user?.fName}? 💬`}
          size="sm"
          py="5"
          px="4"
          borderRadius={"20px"}
          bgColor="#f0f2f5"
          onChange={handleChnage}
          onKeyDown={handleKeyDown}
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
