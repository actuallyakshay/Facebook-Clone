import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { SearchIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdWebStories } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import ProfileInfoSection from "./ProfileInfoSection";
import { useNavigate } from "react-router-dom";
import FriendsShow from "../utils/FriendsShow";
import { useState } from "react";
import axios from "axios";
import { get_profile_info } from "../redux/SingleUserDetail/single.actions";
import { useDispatch, useSelector } from "react-redux";
import "./Online.css";
import FriendRequestPage from "../Notification/FriendRequestPage";

function Navbar() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.singleUser?.singleUserData);

  useEffect(() => {
    if (input == "") {
      setData([]);
    }
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
    setloading(true);
    axios
      .get(`${process.env.REACT_APP_URL}/user?q=${e.target.value}`)
      .then((res) => {
        setData(res.data);
        setloading(false);
      });
  };

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
              onClick={() => navigate("/")}
            />
          </Center>
          <HStack
            spacing={4}
            justifyContent="center"
            alignItems={"center"}
            w={{ base: "220px", lg: "200px" }}
            zIndex="45"
          >
            <InputGroup position="relative">
              <VStack
                align={"start"}
                display={input == "" ? "none" : "flex"}
                shadow={"lg"}
                borderRadius="xl"
                position={"absolute"}
                h={{ base: "20vh", md: "30vh" }}
                w="full"
                top="100%"
                bg="white"
                overflowY={"auto"}
                overflowX="hidden"
                px="2"
                py="1"
                zIndex={10}
                className="online"
              >
                {data?.map((el) => {
                  return (
                    <Box zIndex={10} key={el._id} w="full">
                      <FriendsShow zIndex={11} el={el} />
                      <Divider />
                    </Box>
                  );
                })}
              </VStack>
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
                onChange={(e) => handleChange(e)}
                bgColor="#f0f2f5"
              />
            </InputGroup>
          </HStack>
        </Flex>
        <HStack
          color="blackAlpha.700"
          spacing="90px"
          ml="-14"
          display={{ base: "none", lg: "flex" }}
        >
          <Box _hover={{ cursor: "pointer" }}>
            <AiFillHome size="25px" onClick={() => navigate("/")} />
          </Box>
          <MdOutlineOndemandVideo size="25px" />
          <Box _hover={{ cursor: "pointer" }}>
            <MdWebStories onClick={() => navigate("/ownStory")} size="25px" />
          </Box>
          <FriendRequestPage />
          <SiFacebookgaming size="20px" />
        </HStack>
        <HStack>
          <Box
            display={{ base: "none", lg: "flex" }}
            bgColor="gray.100"
            borderRadius="full"
            p="3"
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/messenger")}
          >
            <BsMessenger size="15px" />
          </Box>

          <Menu>
            <MenuButton>
              <Box
                display={{ base: "none", lg: "flex" }}
                bgColor="gray.100"
                borderRadius="full"
                p="3"
                position={"relative"}
                _hover={{ cursor: "pointer" }}
              >
                <Text
                  position="absolute"
                  borderRadius="full"
                  border="1px solid red"
                  fontSize={"10px"}
                  px="1"
                  fontWeight={"700"}
                  top="0"
                  right="1%"
                  bg="red"
                  color="white"
                >
                  {user?.notify?.length}
                </Text>
                <IoIosNotifications size="15px" />
              </Box>
            </MenuButton>
            <Portal>
              <MenuList zIndex="1000" px="3" py="2">
                <Heading fontWeight={"500"} size="sm">
                  Notifications 🔔
                </Heading>
                <VStack gap="1" px="3" py="2" align={"start"} mt="3">
                  {user?.notify?.length > 0 ? (
                    user?.notify?.map((el, i) => {
                      return (
                        <HStack key={i}>
                          <Avatar src={el.user_image} />
                          <Text
                            fontSize={"14px"}
                            bg="#f0f2f5"
                            p="2"
                            borderRadius={"10px"}
                            letterSpacing=".4px"
                            borderTopLeftRadius={"0px"}
                            borderBottomEndRadius={"0px"}
                          >
                            {el?.fName} {el?.lName} {el.response} your friend
                            request
                          </Text>
                        </HStack>
                      );
                    })
                  ) : (
                    <Text
                      fontSize={"14px"}
                      bg="#f0f2f5"
                      p="2"
                      borderRadius={"10px"}
                      letterSpacing=".4px"
                      borderTopLeftRadius={"0px"}
                      borderBottomEndRadius={"0px"}
                    >
                      No new notification
                    </Text>
                  )}
                </VStack>
              </MenuList>
            </Portal>
          </Menu>

          <ProfileInfoSection />
        </HStack>
      </Flex>
    </>
  );
}

export default Navbar;
