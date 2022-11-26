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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_profile_info } from "../redux/SingleUserDetail/single.actions";

const set = [
  { icon: <AiTwotoneSetting />, title: "Settings & privacy" },
  { icon: <MdHelp />, title: "Help & support" },
  { icon: <BsFillMoonStarsFill />, title: "Display & accessibility" },
  { icon: <MdFeedback />, title: "Give Feedback" },
];

function ProfileInfoSection() {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data?.token);


  const [email, id, password] = token.split(":");
  const handleClick = () => {
    dispatch(get_profile_info(id));
    navigate("/profile");
  };

  return (
    <>
      <Menu bgColor="white" color="black" zIndex="3" shadow="md">
        <MenuButton>
          <Avatar src={user?.userDetails?.image} />
        </MenuButton>
        <MenuList
          w={{ base: "250px", md: "280px", lg: "300px" }}
          px="4"
          color="black"
        >
          <MenuItem
            mb="5"
            shadow="md"
            borderRadius={"10px"}
            _hover={{ bgColor: "white" }}
            // bgColor="white"
          >
            <VStack w="full" alignItems={"start"}>
              <Flex>
                <Flex alignItems={"center"} gap="5">
                  <Avatar size="sm" src={user?.userDetails?.image} />
                  <Text fontWeight="500">
                    {user?.fName} {user?.lName}
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
                onClick={() => handleClick()}
              >
                See profile
              </Button>
            </VStack>
          </MenuItem>
          {set?.map((el,index) => {
            return (
              <>
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  _hover={{ cursor: "pointer" }}
                  key={index}
                >
                  <Flex mb="4">
                    <Flex alignItems={"center"} gap="3">
                      <Box p="2" borderRadius={"50%"} bgColor="blackAlpha.200">
                        {el.icon}
                      </Box>

                      <Text fontWeight="500" fontSize="13px">
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
