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

const arr = ["💓", "🍁", "😍", "🙌"];

function StoryVisible() {
  const toast = useToast();
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

            <Avatar
              size="md"
              src="https://avatars.githubusercontent.com/u/107462720?v=4"
            />
          </HStack>
          <Grid
            w={{ base: "80%", md: "30%", lg: "30%" }}
            m="auto"
            h="85vh"
            // border="1px solid gray"
            borderRadius={"15px"}
            alignItems="center"
            justifyContent={"center"}
            overflow={"hidden"}
            position="relative"
          >
            <HStack position={"absolute"} top="2%" left="3%" spacing={"4"}>
              <Avatar src="https://avatars.githubusercontent.com/u/107462720?v=4" />
              <Heading size="sm" color="black" fontWeight={"500"}>
                {" "}
                Akshay Rajput
              </Heading>
            </HStack>

            <Image
              src="https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/312902837_3322348451364701_1529533510171976340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=NPsutTOpkFIAX9T2k8t&_nc_ht=scontent.fagr1-4.fna&oh=00_AT94vXZn0gj03M-czaN7wnbYIprdLnjJOjh7h-cES3Bexw&oe=635BA2DA"
              w="100%"
              h="100%"
            />
            <HStack bottom="2%" left="10%" position="absolute">
              {arr?.map((el) => {
                return (
                  <Box
                    onClick={() =>
                      toast({
                        title: "Liked 🌟 !",
                        status: "success",
                        isClosable: false,
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
                    isClosable: false,
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
