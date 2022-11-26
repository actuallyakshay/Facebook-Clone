import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { IoPersonAddSharp } from "react-icons/io5";

import Friendsonline from "../utils/Friendsonline";
import { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { get_profile_info } from "../redux/SingleUserDetail/single.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_friend } from "../redux/Auth/auth.actions";

function Online() {
  const [user, setUsers] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.data?.token);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`http://localhost:8080/user`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleAddFriend = (f, l, image) => {
    let body = {
      user_name: `${f} ${l}`,
      user_image: image,
      type: "friends",
    };

    axios
      .patch(`http://localhost:8080/user`, body, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data !== "Already exist") {
          toast({
            title: "Hey ! Congo 👏",
            description: `You have added ${body.user_name} as a friend `,
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: "Ooppss!! 😰",
            description: `${body.user_name} already added in your friendlist`,
            status: "warning",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  const handleClick = (id) => {
    dispatch(get_profile_info(id));
    navigate("/user");
  };

  return (
    <Flex
      position="sticky"
      top="50px"
      h="90vh"
      w={{ base: "fit-content", lg: "22vw" }}
      flexDirection={"column"}
      px="4"
      py="4"
      overflowY={"scroll"}
      overflowX={"hidden"}
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
        <HStack spacing="-1" color="blackAlpha.600">
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
          <Friendsonline />
        </HStack>
      </Flex>
      <Flex gap="5" flexDirection={"column"}>
        {user?.map((el) => {
          return (
            <Flex key={el._id} gap="3" alignItems={"center"}>
              <Avatar
                onClick={() => handleClick(el._id)}
                size="sm"
                src={el?.userDetails?.image}
              >
                <AvatarBadge boxSize=".9em" bg="green.500" />
              </Avatar>
              <Text
                display={{ base: "none", md: "block" }}
                color="#050505"
                fontSize={"15px"}
                fontWeight="500"
                _hover={{ cursor: "pointer" }}
                onClick={() => handleClick(el._id)}
              >
                {el?.fName} {el?.lName}
              </Text>
              <Button
                size="sm"
                ml="auto"
                _hover={{ bg: "none" }}
                onClick={() =>
                  handleAddFriend(el?.fName, el?.lName, el?.userDetails?.image)
                }
              >
                <IoPersonAddSharp size="20px" />
              </Button>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
    // </div>
  );
}

export default Online;
