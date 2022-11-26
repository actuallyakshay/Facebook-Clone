import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OwnStory() {
  const user = useSelector((state) => state?.singleUser?.singleUserData);

  const navigate = useNavigate();
  return (
    <>
      <Flex
        height={{
          base: "130px",
          sm: "160px",
          md: "165px",
          lg: "190px",
        }}
        ml="2"
        _hover={{ cursor: "pointer" }}
        borderRadius="10px"
        overflow={"hidden"}
        position="relative"
        alignItems={"center"}
        bgColor="blackAlpha.200"
        onClick={() => navigate("/createstory")}
      >
        {/* TODO: */}
        <Avatar
          position="absolute"
          size="sm"
          top="4%"
          left="7%"
          src={user?.userDetails?.image}
          border="2px solid #1877f2"
          zIndex="3"
        />
        <Image
          src={user?.userDetails?.image}
          w="100%"
          _hover={{ transform: "scale(1.1)", transformOrigin: "50% 50%" }}
          transition="transform .5s"
        />
        <Box
          position="absolute"
          bg="white"
          color="white"
          borderRadius={"40px"}
          bottom="13%"
          left="33%"
          border="0px"
          //   p="2"
        >
          <MdOutlineAddCircle size="35px" bgColor="white" color="#1877f2" />
        </Box>
        <Text
          position={"absolute"}
          color="black"
          fontSize="12px"
          bottom="3%"
          left="15%"
          letterSpacing={".2px"}
          fontWeight="500"
          display={{ base: "none", lg: "block" }}
        >
          Create Story
        </Text>
      </Flex>
    </>
  );
}

export default OwnStory;
