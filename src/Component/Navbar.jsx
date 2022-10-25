import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { SearchIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import ProfileInfoSection from "./ProfileInfoSection";

function Navbar() {
  return (
    <>
      <Flex
        position={"sticky"}
        top="0"
        justifyContent={"space-between"}
        h="55px"
        shadow="lg"
        px="5"
        zIndex={4}
        bgColor="		#F8F8F8"
      >
        <Flex
          gap="3"
          alignContent={"center"}
          justifyContent="center"
          textAlign={"center"}
        >
          <Center>
            <SocialIcon
              network="facebook"
              bgColor="#1877f2"
              style={{ height: 40, width: 40 }}
            />
          </Center>
          <Stack
            spacing={4}
            justifyContent="center"
            alignItems={"center"}
            w={{ base: "100px", lg: "fit-content" }}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="15px"
                children={<SearchIcon />}
              />
              <Input
                placeholder="Search facebook"
                borderRadius="20px"
                size="sm"
                bgColor="#f0f2f5"
              />
            </InputGroup>
          </Stack>
        </Flex>
        <HStack
          color="blackAlpha.700"
          spacing="90px"
          ml="-14"
          display={{ base: "none", lg: "flex" }}
        >
          <AiFillHome size="25px" />
          <MdOutlineOndemandVideo size="25px" />
          <AiOutlineShop size="25px" />
          <HiUserGroup size="23px" />
          <SiFacebookgaming size="20px" />
        </HStack>
        <HStack>
          <Box
            display={{ base: "none", lg: "flex" }}
            bgColor="gray.100"
            borderRadius="full"
            p="3"
          >
            <BsMessenger size="15px" />
          </Box>
          <Box
            display={{ base: "none", lg: "flex" }}
            bgColor="gray.100"
            borderRadius="full"
            p="3"
          >
            <IoIosNotifications size="15px" />
          </Box>
          <ProfileInfoSection />
        </HStack>
      </Flex>
    </>
  );
}

export default Navbar;
