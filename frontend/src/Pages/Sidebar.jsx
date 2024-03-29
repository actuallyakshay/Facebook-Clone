import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";
import { memo } from "react";
import "../Component/Online.css";
import { useDispatch, useSelector } from "react-redux";
import { get_profile_info } from "../redux/SingleUserDetail/single.actions";
import { useNavigate } from "react-router-dom";
const arr = [
  { src: "https://i.postimg.cc/9Xsw-Rx42/group.png", title: "Friends" },

  {
    src: "https://i.postimg.cc/CLrzbmrJ/facebook-friend.png",
    title: "Groups",
  },
  { src: "https://i.postimg.cc/x8vjhP9J/market.png", title: "Market Place" },
  { src: "https://i.postimg.cc/J0PvsyqY/media-player.png", title: "Watch" },
  { src: "https://i.postimg.cc/ydnvPMZk/photographs.png", title: "Memories" },
  { src: "https://i.postimg.cc/vHxtgg31/disc-file.png", title: "Saved" },
  { src: "https://i.postimg.cc/W4NZnh6w/pages-file.png", title: "Pages" },
  { src: "https://i.postimg.cc/YCfDXnTK/event.png", title: "Events" },
  { src: "https://i.postimg.cc/Nf8xYyDR/french-horn.png", title: "Add Center" },
  { src: "https://i.postimg.cc/yND9JWmQ/message.png", title: "Add Manager" },
  {
    src: "https://i.postimg.cc/3RgkpGdB/blood-drop.png",
    title: "Blood Donation",
  },
  {
    src: "https://i.postimg.cc/yND9JWmQ/message.png",
    title: "Climate Science center",
  },
  {
    src: "https://i.postimg.cc/wMrYjfgb/coronavirus.png",
    title: "Covid-19 Information Center",
  },
  {
    src: "https://i.postimg.cc/y8q2pSd9/money-inflation.png",
    title: "Crices Responce",
  },
  {
    src: "https://i.postimg.cc/zGX2cSNy/health.png",
    title: "Emotional health",
  },
  { src: "https://i.postimg.cc/2SVFWHm7/star.png", title: "favourites" },
  {
    src: "https://i.postimg.cc/rmJt3WMp/hearth-report.png",
    title: "fundraises",
  },
  {
    src: "https://i.postimg.cc/Tw73ncTn/mobile-gaming-app.png",
    title: "Gmaing Video",
  },
  {
    src: "https://i.postimg.cc/Y2TmVpwY/live-broadcasting.png",
    title: "Live Videos",
  },
  { src: "https://i.postimg.cc/bwyYVMd1/facebook.png", title: "Messenger" },
  { src: "https://i.postimg.cc/4NZXnM6j/chat.png", title: "Messenger Kids" },
  { src: "https://i.postimg.cc/ZKfXZDV8/cube.png", title: "Most recent" },
  { src: "https://i.postimg.cc/SxBTx08M/games.png", title: "Play games" },
  {
    src: "https://i.postimg.cc/SNXf2Tm7/add.png",
    title: "Redcent add activity",
  },
];

function Sidebar() {
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const token = useSelector((state) => state?.auth?.data?.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let email, id, password;

  if (token) {
    [email, id, password] = token.split(":");
  }

  const handleClick = () => {
    dispatch(get_profile_info(id));
    navigate("/profile");
  };

  return (
    <Flex
      position="sticky"
      top="55px"
      h="90vh"
      w={{ base: "20vw", md: "12vw", lg: "23vw" }}
      flexDirection={"column"}
      paddingLeft="4"
      py="4"
      overflowY={"hidden"}
      gap="4"
      className="online"
    >
      <Flex
        _hover={{ cursor: "pointer" }}
        alignItems={"center"}
        gap="3"
        onClick={() => handleClick()}
      >
        <Avatar size="sm" src={user?.userDetails?.image} />
        <Text
          display={{ base: "none", lg: "block" }}
          color="#050505"
          fontSize={"14px"}
          fontWeight="500"
          _hover={{ cursor: "pointer" }}
        >
          {user?.fName} {user?.lName}
        </Text>
      </Flex>
      {arr?.map((el, index) => {
        return (
          <Flex key={index} alignItems={"center"} gap="3">
            <Avatar size="xs" src={el.src} _hover={{ cursor: "pointer" }} />
            <Text
              display={{ base: "none", lg: "block" }}
              color="#050505"
              fontSize={"13px"}
              fontWeight="500"
              _hover={{ cursor: "pointer" }}
            >
              {el.title}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default memo(Sidebar);
