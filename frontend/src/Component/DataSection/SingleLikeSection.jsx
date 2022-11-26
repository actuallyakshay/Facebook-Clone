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
function SingleLikeSection({ user_image, user_name }) {
  return (
    <HStack
      gap="2"
      w="full"
      px="2"
      justifyContent={"space-evenly"}
    >
      <Avatar size="sm" src={user_image} />
      <Text fontWeight={"500"} fontSize="15px" letterSpacing={".5px"}>
        {user_name}
      </Text>
      <Button
        bg="blackAlpha.100"
        _hover={{ bg: "blackAlpha.300" }}
        ml="4"
        size="sm"
        leftIcon={<TbUserPlus />}
      >
        {" "}
        Add Friend
      </Button>
    </HStack>
  );
}

export default SingleLikeSection;
