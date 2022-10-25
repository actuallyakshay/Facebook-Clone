import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { ImCross } from "react-icons/im";
import { SocialIcon } from "react-social-icons";
import { FcSettings, FcGallery } from "react-icons/fc";

import { BsMessenger } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

function CreateStory() {
  return (
    <>
      <Grid
        gridTemplateColumns={"1fr 3fr"}
        // border="2px solid blue solid red"
        w="100vw"
        h="100vh"
        // p="3"
      >
        <Flex
          // border="1px solid green"
          flexDirection={"column"}
          alignItems="flex-start"
          shadow="2xl"
          p="3"
          display={{ base: "none", lg: "flex" }}
        >
          <Flex gap="3" mb="4">
            <IconButton
              borderRadius={"full"}
              aria-label="Search database"
              bgColor="blackAlpha.500"
              _hover={{ bgColor: "blackAlpha.500" }}
              icon={<ImCross />}
              color="white"
            />
            <SocialIcon
              network="facebook"
              bgColor="#1877f2"
              style={{ height: 40, width: 40 }}
            />
          </Flex>
          <Divider />
          <Flex justifyContent="space-between" alignItems="center" w="full">
            <Heading mt="2" mb="5" size="md" color={"blackAlpha.700"}>
              Your Story
            </Heading>
            <Box bgColor={"blackAlpha.200"} borderRadius="40px" p="2">
              <FcSettings
                width="30px"
                _hover={{ color: "#1877f2", cursor: "pointer" }}
              />
            </Box>
          </Flex>

          <br />
          <HStack>
            <Avatar
              src="https://avatars.githubusercontent.com/u/107462720?v=4"
              size="lg"
            />
            <Heading size="sm" fontWeight={"500"}>
              Akshay Rajput
            </Heading>
          </HStack>
          <br />
          <Divider />
        </Flex>
        <Grid
          bgColor="#f0f2f5"
          w={{ base: "100vw", lg: "full" }}
          alignItems={"center"}
          position="relative"
        >
          <HStack position="absolute" right="3%" top="2%">
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

            <Avatar
              size="md"
              src="https://avatars.githubusercontent.com/u/107462720?v=4"
            />
          </HStack>
          <Grid
            w="23%"
            m="auto"
            h="25vh"
            borderRadius={"15px"}
            alignItems="center"
            justifyContent={"center"}
            backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/6Rg87FhkXMc.png)"
            backgroundPosition="0px 0px"
            backgroundSize="221px 687px"
            overflow={"hidden"}
          >
            <Flex
              justifyContent={"center"}
              flexDirection="column"
              alignItems={"center"}
              gap="3"
            >
              <Box w="fit-content" p="2" borderRadius={"full"} bgColor="white">
                <FcGallery size="30px" />
              </Box>
              <Heading fontWeight={"500"} as="i" fontSize="14px">
                Create a Photo Story
              </Heading>
            </Flex>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateStory;

// background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/6Rg87FhkXMc.png"); background-position: 0px 0px; background-size: 221px 687px; width: 220px; height: 330px; background-repeat: no-repeat; display: inline-block;
