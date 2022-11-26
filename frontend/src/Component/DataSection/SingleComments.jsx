import React from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { TbUserPlus } from "react-icons/tb";

function SingleComments({ user_name, user_image, title }) {
  return (
    <HStack w="full" px="2" align="center">
      <Avatar size="sm" src={user_image} />
      <VStack
        bg="#f0f2f5"
        borderRadius={"30px"}
        px="6"
        py="7px"
        w="80%"
        align="start"
      >
        <Box mb="-2">
          <Text letterSpacing={".5px"} fontSize={"14px"} fontWeight={"600"}>
            {user_name}
          </Text>
        </Box>
        <Text letterSpacing={".4px"} align="start" w="100%" fontSize="13px">
          {title}
        </Text>
      </VStack>
      <VStack>
        <Box
          shadow="lg"
          border="2px solid white"
          borderRadius={"full"}
          p="1"
          bg="#1877f2"
          h="fit-content"
        >
          <AiFillLike color="white" />
        </Box>
        <Box
          shadow="lg"
          borderRadius={"full"}
          p="1"
          bg="blackAlpha.100"
          h="fit-content"
          color={"black"}
          _hover={{ bg: "blackAlpha.200", cursor: "pointer", color: "#1877f2" }}
        >
          <TbUserPlus />
        </Box>
      </VStack>
    </HStack>
  );
}

export default SingleComments;
