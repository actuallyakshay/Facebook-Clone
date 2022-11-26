import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { SocialIcon } from "react-social-icons";
import { FcSettings, FcGallery } from "react-icons/fc";

import { BsMessenger } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { add_story_to_db } from "../redux/Story/story.actions";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStory() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const token = useSelector((state) => state?.auth?.data?.token);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const userDetails = useSelector((state) => state?.singleUser?.singleUserData);

  useEffect(() => {}, [dispatch]);

  const handleStory = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "Facebook");
    data.append("cloud_name", "dhxtxmw5n");
    setloading(true);
    axios
      .post(`https://api.cloudinary.com/v1_1/dhxtxmw5n/image/upload`, data)
      .then((res) => {
        let body = {
          image: res.data.url,
        };
        setloading(false);
        axios
          .post(`https://graceful-visor-slug.cyclic.app/story`, body, {
            headers: {
              token: token,
            },
          })
          .then((res) => {
            setImage(res.data.image);
            toast({
              title: "Story uploaded Successfully ❤️",
              position: "top",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          });
      })
      .catch((err) => console.log(err));
  };

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
            <Avatar src={userDetails?.userDetails?.image} size="lg" />
            <Heading size="sm" fontWeight={"500"}>
              {userDetails?.fName} {userDetails?.lName}
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

            <Avatar size="md" src={userDetails?.userDetails?.image} />
          </HStack>
          {image !== "" ? (
            <Container>
              <Box m="auto">
                <Image src={image} m="auto" />
              </Box>
            </Container>
          ) : (
            <label style={{ cursor: "pointer" }}>
              <input
                type={"file"}
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={(e) => handleStory(e)}
              />
              <Grid
                w={{ base: "90%", sm: "85%", md: "50%", lg: "23%" }}
                m="auto"
                h="55vh"
                borderRadius={"15px"}
                alignItems="center"
                justifyContent={"center"}
                backgroundImage="url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/6Rg87FhkXMc.png)"
                backgroundPosition="0px 0px"
                backgroundSize={{ base: "", md: "221px 687px" }}
                overflow={"hidden"}
              >
                <Flex
                  justifyContent={"center"}
                  flexDirection="column"
                  alignItems={"center"}
                  gap="3"
                >
                  <Box
                    w="fit-content"
                    p="2"
                    borderRadius={"full"}
                    bgColor="white"
                  >
                    <FcGallery size="30px" />
                  </Box>

                  <Heading fontWeight={"500"} as="i" fontSize="14px">
                    Create a Photo Story
                  </Heading>
                </Flex>
              </Grid>
            </label>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default CreateStory;
