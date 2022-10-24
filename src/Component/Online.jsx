import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
const arr = [
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107462720?v=4",
    title: "Friends",
  },
];

function Online() {
  return (
    <Flex
      position="sticky"
      top="50px"
      h="90vh"
      w={{ base: "fit-content", lg: "23vw" }}
      flexDirection={"column"}
      px="4"
      py="4"
      overflowY={"scroll"}
      gap="4"
    >
      <Flex>
        <Heading color="blackAlpha.600" fontSize="17px" fontWeight={"500"}>
          Sponcored
        </Heading>
      </Flex>
      <hr />
      <Flex justifyContent="space-between" alignItems={"center"}>
        <Heading color="blackAlpha.600" fontSize="17px" fontWeight={"500"}>
          Contacts
        </Heading>
        <HStack spacing="1" color="blackAlpha.600">
          <IconButton
            borderRadius={"full"}
            aria-label="Search database"
            _hover={{ bgColor: "blackAlpha.100" }}
            icon={<BsFillCameraVideoFill />}
          />
          <IconButton
            borderRadius={"full"}
            aria-label="Search database"
            _hover={{ bgColor: "blackAlpha.100" }}
            icon={<AiOutlineSearch />}
          />
          <IconButton
            borderRadius={"full"}
            aria-label="Search database"
            _hover={{ bgColor: "blackAlpha.100" }}
            icon={<CgMenuRight />}
          />
        </HStack>
      </Flex>
      <Flex gap="5" flexDirection={"column"}>
        {arr.map((el) => {
          return (
            <Flex gap="3" alignItems={"center"}>
              <Avatar size="sm" src={el.src}>
                <AvatarBadge boxSize=".9em" bg="green.500" />
              </Avatar>
              <Text
                display={{ base: "none", md: "block" }}
                color="#050505"
                fontSize={"15px"}
                fontWeight="500"
                _hover={{ cursor: "pointer" }}
              >
                {/* {el.title} */}
                Akshay rajput
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
    // </div>
  );
}

export default Online;
