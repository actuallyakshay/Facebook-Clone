import { Box, Button, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";

function UserStories() {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  let email, id, password;

  const [stories, setStories] = useState([]);

  if (token) {
    [email, id, password] = token.split(":");
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/story/${id}`)
      .then((res) => setStories(res.data));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/story/${id}`)
      .then((res) => getData());
  };

  return (
    <>
      <Navbar />
      <Box bg="#f0f2f5" h="100vh">
        <Flex
          as="kbd"
          fontSize={"22px"}
          fontWeight="600"
          color="#0a64da"
          letterSpacing={"10px"}
          w="full"
          justifyContent={"center"}
          pt="5"
          display={stories.length > 0 ? "flex" : "none"}
        >
          S T O R I E S
        </Flex>
        {stories?.length > 0 ? (
          <Grid
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap="3"
            w={{ base: "95%", lg: "85%" }}
            m="auto"
            mt="5"
          >
            {stories?.map((elem, i) => {
              return (
                <VStack
                  shadow={"lg"}
                  bg="white"
                  key={i}
                  h={{ base: "40vh", md: "50vh", lg: "60vh" }}
                  overflow="hidden"
                  borderRadius={"8px"}
                  position="relative"
                >
                  <Button
                    borderRadius={"0"}
                    zIndex={500}
                    position={"absolute"}
                    top="0"
                    right="2%"
                    colorScheme={"facebook"}
                    onClick={() => handleDelete(elem._id)}
                  >
                    <MdDeleteForever fontSize={"22px"} color="white" />
                  </Button>
                  <Image
                    _hover={{
                      transform: "scale(1.1)",
                      transformOrigin: "50% 50%",
                    }}
                    transition="transform .5s"
                    src={elem?.image}
                    h="100%"
                  />
                </VStack>
              );
            })}
          </Grid>
        ) : (
          <Box h="80vh">
            <br />
            <VStack gap="5">
              <Text
                letterSpacing={".5px"}
                fontWeight="400"
                fontSize={"25px"}
                as="kbd"
                color="blackAlpha.700"
              >
                No Story Available 😒, Please add some stories !!
              </Text>
              <Button
                bgColor="#1b74e4"
                color="white"
                size="md"
                _hover={{ bg: "#0555b8" }}
                leftIcon={<AiFillPlusCircle />}
                onClick={() => navigate("/createstory")}
                zIndex={800}
              >
                Add to story
              </Button>
              <Image
                src="https://pngimg.com/uploads/cat/cat_PNG50534.png"
                w={{ base: "68%", md: "58%", lg: "28%" }}
                opacity={0.7}
              />
            </VStack>
          </Box>
        )}
      </Box>
    </>
  );
}

export default UserStories;
