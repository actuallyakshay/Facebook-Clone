import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { ImCross } from "react-icons/im";
import { SocialIcon } from "react-social-icons";
import { FcSettings, FcGallery } from "react-icons/fc";

import { BsMessenger, BsFillHeartFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { GiCottonFlower } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const arr = ["💓", "🍁", "😍", "🙌", "🥰"];

function StoryVisible() {
  const toast = useToast();
  const navigate = useNavigate();

  const singleObj = useSelector((state) => state?.story?.singleStory);

  return (
    <>
      <Grid gridTemplateColumns={"1fr 3fr"} w="100vw" h="100vh">
        <Flex
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
              onClick={() => navigate("/")}
            />
            <SocialIcon
              network="facebook"
              bgColor="#1877f2"
              style={{ height: 40, width: 40 }}
              onClick={() => navigate("/")}
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
            <Avatar src={singleObj?.user?.userDetails?.image} size="lg" />
            <Heading size="sm" fontWeight={"500"}>
              {singleObj?.user?.fName} {singleObj?.user?.lName}
            </Heading>
          </HStack>
          <br />
          <Divider />
        </Flex>
        <Grid
          bgColor="#000000"
          w={{ base: "100vw", lg: "full" }}
          alignItems={"center"}
          position="relative"
        >
          <HStack
            position="absolute"
            right="3%"
            top="2%"
            zIndex={3}
            display={{ base: "none", md: "flex" }}
          >
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

            <Avatar size="md" src={singleObj?.user?.userDetails?.image} />
          </HStack>
          <Grid
            w={{ base: "99%", md: "45%", lg: "50%" }}
            m="auto"
            h={{ base: "55vh", md: "85vh" }}
            borderRadius={"15px"}
            alignItems="center"
            justifyContent={"center"}
            overflow={"hidden"}
            position="relative"
          >
            <HStack position={"absolute"} top="2%" left="3%" spacing={"4"}>
              <Avatar
                border="2px dashed #1877f2"
                src={singleObj?.user?.userDetails?.image}
              />
              <Heading
                bg="white"
                px="1"
                borderRadius={"10px"}
                size="sm"
                color="black"
                fontWeight={"500"}
              >
                {" "}
                {singleObj?.user?.fName} {singleObj?.user?.lName}
              </Heading>
            </HStack>

            <Image src={singleObj?.image} w="100%" h="100%" />
            <HStack
              bottom="2%"
              gap={{ base: "2", md: "4", lg: "5" }}
              left="10%"
              position="absolute"
            >
              {arr?.map((el) => {
                return (
                  <Box
                    onClick={() =>
                      toast({
                        title: "Liked 🌟 !",
                        status: "success",
                        position: "top",
                        isClosable: true,
                        duration: 1000,
                      })
                    }
                    borderRadius={"50%"}
                    fontSize={"40px"}
                    _hover={{ cursor: "pointer" }}
                  >
                    {el}
                  </Box>
                );
              })}
            </HStack>
          </Grid>
          <Grid
            gridTemplateColumns={{ base: "1fr", lg: "repeat(2,1fr)" }}
            w="70%"
            m="auto"
          >
            <Input type="text" placeholder="reply...." borderRadius={"30px"} />
            <HStack>
              <Box
                onClick={() =>
                  toast({
                    title: "Liked 🌟 !",
                    status: "success",
                    position: "top",
                    isClosable: true,
                    duration: 1000,
                  })
                }
                fontSize={"27px"}
                _hover={{ cursor: "pointer" }}
              >
                👏🔥😂💘🥺✅
              </Box>
            </HStack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default StoryVisible;
