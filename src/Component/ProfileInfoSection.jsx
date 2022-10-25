import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { AiTwotoneSetting } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import { MdHelp, MdFeedback } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logout from "./Logout";

const arr = [
  { icon: <AiTwotoneSetting />, title: "Settings & privacy" },
  { icon: <MdHelp />, title: "Help & support" },
  { icon: <BsFillMoonStarsFill />, title: "Display & accessibility" },
  { icon: <MdFeedback />, title: "Give Feedback" },
];

function ProfileInfoSection() {
  return (
    <>
      <Menu bgColor="white" shadow="md">
        <MenuButton>
          <Avatar src="https://avatars.githubusercontent.com/u/107462720?v=4" />
        </MenuButton>
        <MenuList
          w={{ base: "250px", md: "280px", lg: "300px" }}
          px="4"
          bgColor="white"
        >
          <MenuItem
            mb="5"
            shadow="md"
            borderRadius={"10px"}
            _hover={{ bgColor: "white" }}
            bgColor="white"
          >
            <VStack w="full" alignItems={"start"}>
              <Flex>
                <Flex alignItems={"center"} gap="5">
                  <Avatar
                    size="sm"
                    src="https://avatars.githubusercontent.com/u/107462720?v=4"
                  />
                  <Text
                    display={{ base: "none", md: "block" }}
                    color="#050505"
                    fontWeight="500"
                  >
                    Akshay Rajput
                  </Text>
                </Flex>
              </Flex>
              <Divider />
              <Button
                color="#1877f2"
                _hover={{ bgColor: "blackAlpha.100" }}
                variant="ghost"
                w="100%"
                size="sm"
              >
                See profile
              </Button>
            </VStack>
          </MenuItem>
          {/* <Divider mb="3" /> */}
          {arr?.map((el) => {
            return (
              <>
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  _hover={{ cursor: "pointer" }}
                >
                  <Flex mb="4">
                    <Flex alignItems={"center"} gap="3">
                      <Box
                        p="2"
                        borderRadius={"50%"}
                        bgColor="blackAlpha.200"
                        color="black"
                      >
                        {el.icon}
                      </Box>

                      <Text
                        display={{ base: "none", md: "block" }}
                        color="#050505"
                        fontWeight="500"
                        fontSize="13px"
                      >
                        {el.title}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <SlArrowRight />
                  </Flex>
                </Flex>
              </>
            );
          })}

          <Logout />
          <HStack textAlign={"start"} mt="4">
            <Text fontSize={"11px"} color="gray" _hover={{ cursor: "pointer" }}>
              Privacy · Terms · Advertising · Ad choices · Cookies · More · Meta
              © 2022
            </Text>
          </HStack>
        </MenuList>
      </Menu>
    </>
  );
}

export default ProfileInfoSection;
