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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getLOGIN } from "../redux/Auth/auth.actions";
import LoginFooter from "./LoginFooter";
import Singup from "./Signup";
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";

function Login() {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.data?.token);
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState({ otp: "", password: "" });

  const handleChange = (e) => {
    setloginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = (loginForm) => {
    dispatch(getLOGIN(loginForm));
    if (token) {
      toast({
        title: "Greeting of the Day !",
        description: "Welcome to facebook",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const handleChange2 = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    let body = { email };

    axios
      .patch(`${process.env.REACT_APP_URL}/user/getotp`, body)
      .then((res) => {
        if (res.data == "user not found") {
          toast({
            title: "Hey !! This acc doesn't exist",
            description: "Please Signup first",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: "Hey !! OTP has sent to your gmail",
            description: "Please check gmail once",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
          setHide(!hide);
        }
      })
      .catch((e) => console.log(e.message));
  };

  const handleNewPassword = () => {
    let body = {
      email,
      otp: otp.otp,
      password: otp.password,
    };
    axios
      .patch(`${process.env.REACT_APP_URL}/user/resetpassword`, body)
      .then((res) => {
        if (res.data == "Invalid otp") {
          toast({
            title: "Hey !! Buddy",
            description: "Password enter correct otp",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        } else {
          toast({
            title: "Hey !! Congo ! 🥰",
            description: "Password updated successfully",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
          onClose();
          setHide(!hide);
        }
      })
      .catch((e) => console.log(e.message));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

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
              // bg={useColorModeValue("white", "white")}
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
                  onClick={onOpen}
                  fontSize="14px"
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  style={{ color: "#1877f2" }}
                >
                  Forgotten password?
                </Text>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Enter email 📩</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <VStack>
                        <Input
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your gmail here"
                          display={hide ? "none" : "flex"}
                        />
                        <Input
                          type="text"
                          onChange={(e) => handleChange2(e)}
                          placeholder="Enter otp here"
                          name="otp"
                          value={otp.otp}
                          display={!hide ? "none" : "flex"}
                        />
                        <Input
                          type="password"
                          onChange={(e) => handleChange2(e)}
                          placeholder="Enter new password"
                          name="password"
                          value={otp.password}
                          display={!hide ? "none" : "flex"}
                        />
                      </VStack>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        w="full"
                        size="sm"
                        colorScheme="facebook"
                        onClick={() => handleSend()}
                        display={hide ? "none" : "flex"}
                        letterSpacing=".6px"
                        rightIcon={<IoMdNotifications />}
                      >
                        Send Otp
                      </Button>
                      <Button
                        w="full"
                        size="sm"
                        colorScheme="facebook"
                        onClick={() => handleNewPassword()}
                        display={!hide ? "none" : "flex"}
                        letterSpacing=".6px"
                      >
                        Submit new password
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
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
