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
const name = "Akshay";

function Upload() {
  return (
    <Box
      w={{ base: "95%", lg: "75%" }}
      mx="auto"
      mt="5"
      borderRadius="10px"
      bgColor={"white"}
      p="3"
      paddingBottom={"1"}
    >
      <HStack spacing={3} mb="3">
        <Avatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/107462720?v=4"
        />
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

      <HStack mt='2'>
        <Button
          leftIcon={<FcVideoCall />}
          bgColor={"white"}
          _hover={{ bgColor: "#f0f2f5" }}
        >
          {" "}
          Live video
        </Button>
        <Button
          bgColor={"white"}
          leftIcon={<FcAddImage />}
          _hover={{ bgColor: "#f0f2f5" }}
        >
          Photo/Video
        </Button>
        <Button
          _hover={{ bgColor: "#f0f2f5" }}
          bgColor={"white"}
          leftIcon={<FcNeutralDecision />}
        >
          Feeling/Activity
        </Button>
      </HStack>
    </Box>
  );
}

export default Upload;
