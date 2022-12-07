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
    <Flex gap="2" w="full" px="2" >
      <Avatar size="sm" src={user_image} />
      <Text fontWeight={"500"} fontSize="15px" letterSpacing={".5px"}>
        {user_name}
      </Text>
    </Flex>
  );
}

export default SingleLikeSection;
