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
  /*
 border="2px solid red"
        w={{ base: "95%", sm:"80%" , md:'65%' , lg: "75%" }}
        // w='90%'
        mx="auto"
        mt="5"
        h={{ base: "200px", sm: "210px", md: "250px", lg: "260px" }}
        borderRadius="10px"
        // position={"relative"}
        bgColor={"white"}
        px="0"
        paddingBottom={"1"}

  */
  return (
    <Box
      // border="2px solid green"
      w={{ base: "95%", sm: "80%", md: "65%", lg: "75%" }}
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

      <HStack mt="2" justifyContent={"space-between"}>
        <Button
          leftIcon={<FcVideoCall />}
          bgColor={"white"}
          _hover={{ bgColor: "#f0f2f5" }}
        >
          <Text display={{ base: "none", md: "block" }}>Live video</Text>
        </Button>
        <Button
          bgColor={"white"}
          leftIcon={<FcAddImage />}
          _hover={{ bgColor: "#f0f2f5" }}
        >
          <Text display={{ base: "none", md: "block" }}>Photo/Video</Text>
        </Button>
        <Button
          _hover={{ bgColor: "#f0f2f5" }}
          bgColor={"white"}
          leftIcon={<FcNeutralDecision />}
        >
          <Text display={{ base: "none", md: "block" }}> Feeling/Activity</Text>
        </Button>
      </HStack>
    </Box>
  );
}

export default Upload;
