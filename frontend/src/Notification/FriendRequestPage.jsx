import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HiUserGroup } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getSingleUserDetails } from "../redux/SingleUserDetail/single.actions";
import { useEffect } from "react";
import { useState } from "react";

function FriendRequestPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const dispatch = useDispatch();
  const toast = useToast();
  const token = localStorage.getItem("token");
  const [fr, setFr] = useState([]);
  let email, id, password;
  if (token) {
    [email, id, password] = token.split(":");
  }
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/user/${id}`)
      .then((res) => setFr(res.data))
      .catch((e) => console.log(e.message));
  };

  const handleConfirm = (fName, lName, user_image) => {
    let body = {
      type: "friends",
      requestResponse: "accept",
      selfF: `${user?.fName}`,
      selfL: `${user?.lName}`,
      selfI: `${user?.userDetails?.image}`,
      addF: fName,
      addL: lName,
      addI: user_image,
    };
    axios
      .patch(`${process.env.REACT_APP_URL}/user`, body, {
        headers: {
          token,
        },
      })
      .then((res) => {
        getUser();
        toast({
          title: `Hey ! ${user?.fName} 🙋🏻‍♂️`,
          description: `Now you are connected with ${fName} `,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((e) => console.log(e.message));
  };


  const handleDelete = () => {
    //  let body = {
    //    type: "reject",
    //    requestResponse: "accept",
    //    selfF: `${user?.fName}`,
    //    selfL: `${user?.lName}`,
    //    selfI: `${user?.userDetails?.image}`,
    //    addF: fName,
    //    addL: lName,
    //    addI: user_image,
    //  };
  }

  return (
    <>
      <Box onClick={onOpen} _hover={{ cursor: "pointer" }}>
        <HiUserGroup size="23px" />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={fr?.followers?.length > 0 ? "fit-content" : "30vw"}
          pb="5"
          px="5"
          bg="#f0f2f5"
        >
          <ModalHeader>
            <HStack gap="0" align="top">
              <Avatar
                size="xs"
                src="https://i.postimg.cc/9Xsw-Rx42/group.png"
                _hover={{ cursor: "pointer" }}
              />
              <Text
                display={{ base: "none", lg: "block" }}
                color="#050505"
                fontSize={"14px"}
                fontWeight="500"
                letterSpacing={".6px"}
                _hover={{ cursor: "pointer" }}
              >
                Friend requests
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {fr.followers?.length > 0 ? (
              fr?.followers?.map((el, i) => {
                return (
                  <Flex
                    key={i}
                    w="fit-content"
                    px="5"
                    py="4"
                    borderRadius={"9px"}
                    bg="white"
                    border={"1px solid #E8E8E8"}
                  >
                    <HStack gap="4" align="center">
                      <Avatar src={el?.user_image} size="md" />
                      <VStack gap="2" align={"start"}>
                        <Text
                          display={{ base: "none", lg: "block" }}
                          color="#050505"
                          fontSize={"15px"}
                          fontWeight="400"
                          letterSpacing={".6px"}
                          _hover={{ cursor: "pointer" }}
                        >
                          {el?.fName} {el?.lName}
                        </Text>
                        <HStack>
                          <Button
                            bg="#116fe9"
                            _hover={{ bg: "#0966e0" }}
                            size="sm"
                            colorScheme={"facebook"}
                            onClick={() =>
                              handleConfirm(
                                el?.fName,
                                el?.lName,
                                el?.user_image
                              )
                            }
                          >
                            Confirm
                          </Button>
                          <Button
                            bg="blackAlpha.300"
                            _hover={{
                              bg: "gray",
                              color: "white",
                            }}
                            size="sm"
                            colorScheme={"gray"}
                            onClick ={()=>handleDelete()}
                          >
                            Delete
                          </Button>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Flex>
                );
              })
            ) : (
              <VStack justifyContent={"center"} m={"auto"}>
                <Text>No friends Added in your friendList 💔</Text>
                <Image
                  src="https://i.ibb.co/JnVm2w7/undraw-true-friends-c94g.png"
                  w="100%"
                  borderRadius={"20px"}
                />
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FriendRequestPage;
