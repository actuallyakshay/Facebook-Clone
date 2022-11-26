import {
  Box,
  Grid,
  Text,
  VStack,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Divider,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLOGIN } from "../redux/Auth/auth.actions";
import LoginFooter from "./LoginFooter";
import Singup from "./Signup";

function Login() {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.data?.token);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    setloginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = (loginForm) => {
    // console.log("first");
    dispatch(getLOGIN(loginForm));
    // console.log("second");
    setTimeout(() => {
      // console.log("third");
      if (token) {
        // console.log("forth");
        navigate("/");
        toast({
          title: "Greeting of the Day !",
          description: "Welcome to facebook",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    }, 1000);
  };

  return (
    <>
      <Flex h="100vh" bgColor={"#f0f2f5"}>
        <Grid
          w="80%"
          m="auto"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
        >
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent={"center"}
            textAlign="left"
            w="80%"
            m="auto"
            gap="3"
          >
            <Heading size="2xl" style={{ color: "#1877f2" }}>
              facebook
            </Heading>
            <Text fontSize={"22px"} fontWeight="400" color=" #1c1e21">
              Facebook helps you connect and share with the people in your life.
            </Text>
          </Flex>

          <Flex
            w={{ base: "90%", md: "80%", lg: "70%" }}
            m="auto"
            align={"center"}
            justify={"center"}
            flexDirection="column"
          >
            <Stack
              spacing={4}
              w={"full"}
              maxW={"md"}
              bg={useColorModeValue("white", "white")}
              rounded={"xl"}
              boxShadow={"xl"}
              p={6}
              my={12}
            >
              <FormControl id="email" isRequired>
                <Input
                  placeholder="Enter Email address"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <Input
                  name="password"
                  value={loginForm.password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Stack spacing={6}>
                <Button
                  color="white"
                  _hover={{
                    bg: "blue.700",
                  }}
                  style={{ backgroundColor: "#1877f2" }}
                  onClick={() => handleLogin(loginForm)}
                >
                  Submit
                </Button>
                <Text
                  fontSize="14px"
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  style={{ color: "#1877f2" }}
                >
                  Forgotten password?
                </Text>
                <hr style={{ color: "black" }} />
                <Flex>
                  {/* <Button colorScheme="whatsapp" w="60%" m="auto"> */}
                  <Singup />
                  {/* </Button> */}
                </Flex>
              </Stack>
            </Stack>

            <Text mt="-9" fontSize="13px" color="gray">
              Create a Page for a celebrity, brand or business.
            </Text>
          </Flex>
        </Grid>
      </Flex>
      <br />
      <Box display={{ base: "none", md: "flex" }}>
        <LoginFooter />
      </Box>
    </>
  );
}

export default Login;
