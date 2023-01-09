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
import "./Online.css";

function Online() {
  const [user, setUsers] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.data?.token);
  const userDetails = useSelector((state) => state?.singleUser?.singleUserData);

  let email, id, password;

  if (token !== undefined) {
    [email, id, password] = token.split(":");
  }

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/user`)
      .then((res) => {
        let validate = res.data?.filter((el) => {
          return el._id != id;
        });
        setUsers(validate);
      })
      .catch((err) => console.log(err));
  };

  const handleAddFriend = (sF, sL) => {
    let body = {
      recF: sF,
      recL: sL,
      senderF: userDetails?.fName,
      senderL: userDetails?.lName,
      senderImage: userDetails?.userDetails?.image,
    };
    if (
      userDetails.friends.find((el) => {
        if (el.fName == sF && el.lName == sL) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      toast({
        title: "Ooppss!! 😰",
        description: `${sF} ${sL} already added in your friendlist`,
        status: "warning",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } else {
      axios.post(`${process.env.REACT_APP_URL}/user/fr`, body).then((res) => {
        if (res.data !== "Already exist") {
          toast({
            title: `Friend req sent to ${sF} ${sL}`,
            description: "wait for responce",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: `Hey ! ${userDetails?.fName} 🙋🏻‍♂️ `,
            description: `You req is pending, Please wait for the response`,
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
      });
    }
  };

  const handleClick = (id, fName, lName) => {
    if (
      userDetails?.friends?.find((el) => {
        if (el.fName == fName && el.lName == lName) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      dispatch(get_profile_info(id));
      navigate("/user");
    } else {
      toast({
        title: `Hey !! ${userDetails?.fName}`,
        description: `This acc is private 😐, Please add first if you want to see profile`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
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
      overflowY={"hidden"}
      overflowX={"hidden"}
      gap="4"
      className="online"
    >
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
                fontSize={"14px"}
                fontWeight="500"
                _hover={{ cursor: "pointer" }}
                onClick={() => handleClick(el._id, el?.fName, el?.lName)}
              >
                {el?.fName.substring(0, 8)} {el?.lName}
              </Text>
              <Button
                size="sm"
                ml="auto"
                _hover={{ bg: "none" }}
                onClick={() => handleAddFriend(el?.fName, el?.lName)}
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
