import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";

import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import CommentSection from "./CommentSection";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import SingleComments from "./SingleComments";
import SingleLikeSection from "./SingleLikeSection";
import LikesComponent from "./LikesComponent";
import { POST_DELETE, PUT_LIKE } from "../../redux/Posts/post.actions";
import { TbUserPlus } from "react-icons/tb";

function PostComponent({ elem }) {
  const [like, setLike] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userDetails = useSelector((state) => state?.singleUser?.singleUserData);
  const dispatch = useDispatch();
  const toast = useToast();
  const token = useSelector((state) => state?.auth?.data?.token);
  const user = useSelector((state) => state?.singleUser?.singleUserData);

  const handleLike = (_id) => {
    setLike(!like);
    let body = {
      type: "like",
      user_name: `${userDetails?.fName} ${userDetails?.lName}`,
      user_image: `${userDetails?.userDetails?.image}`,
    };
    dispatch(PUT_LIKE(_id, body));
  };

  const handleDelete = (id) => {
    dispatch(POST_DELETE(id, token));
    toast({
      title: `Hey !! ${user?.fName} ❤️ `,
      description: "post deleted successfully 😿",
      status: "warning",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  return (
    <>
      <br />
      <VStack
        key={elem?._id}
        // w={{ base: "95%", sm: "90%", md: "75%", lg: "75%" }}
        w={{ base: "95%", sm: "80%", md: "65%", lg: "75%" }}
        mx="auto"
        m="auto"
        align="start"
        borderRadius={"10px"}
        py="2"
        bg="white"
        overflowX={"hidden"}
      >
        <HStack px="2" w="full" justifyContent={"space-between"}>
          <HStack>
            <Avatar src={elem?.user?.userDetails?.image} size="md" />
            <Box>
              <Text fontWeight={"500"} letterSpacing="1px" fontSize={"14px"}>
                {elem?.user?.fName} {elem?.user?.lName}
              </Text>
              <VStack align="start">
                <Text fontSize={"11px"}>
                  {" "}
                  {elem?.createdAt.substring(0, 10)}
                </Text>
              </VStack>
            </Box>
          </HStack>
          <Box
            ml="auto"
            p="2"
            borderRadius={"full"}
            _hover={{ bg: "blackAlpha.100", cursor: "pointer" }}
            onClick={() => handleDelete(elem?._id)}
          >
            <MdOutlineDelete />
          </Box>
        </HStack>
        <Text
          letterSpacing={".3px"}
          fontSize="14px"
          fontWeight={"400"}
          color="#050505"
          px="3"
        >
          {elem?.posts?.caption}
        </Text>
        <Box w="full" overflowX={"hidden"}>
          <Image src={elem?.posts?.image} m="auto" />
        </Box>
        <HStack
          w="full"
          px="2"
          color="blackAlpha.600"
          fontWeight={"500"}
          letterSpacing=".4px"
          fontSize={"12px"}
          justifyContent="space-between"
        >
          <HStack>
            <Box
              shadow="lg"
              border="2px solid white"
              borderRadius={"full"}
              p="1"
              bg="#1877f2"
            >
              <AiFillLike color="white" />
            </Box>
            <LikesComponent elem={elem?.likes} />
          </HStack>
          <Text> {elem?.comments.length} comments</Text>
        </HStack>
        <HStack
          px="2"
          w="full"
          border="1px solid #D8D8D8"
          borderLeft={"0"}
          borderRight={"0"}
          color="blackAlpha.700"
        >
          <Button
            variant={"ghost"}
            leftIcon={<FaThumbsUp />}
            size="sm"
            flex="1"
            letterSpacing={".5px"}
            _hover={{ bg: "blackAlpha.100" }}
            onClick={() => handleLike(elem._id)}
          >
            Like
          </Button>
          <Button
            onClick={onOpen}
            variant={"ghost"}
            leftIcon={<GoComment />}
            size="sm"
            flex="1"
            _hover={{ bg: "blackAlpha.100" }}
          >
            Comment
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Comments</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack gap="1" pb="3">
                  {elem?.comments.map((el) => {
                    return <SingleComments {...el} />;
                  })}
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Button
            variant={"ghost"}
            leftIcon={<RiShareForwardLine />}
            size="sm"
            flex="1"
            _hover={{ bg: "blackAlpha.100" }}
          >
            Share
          </Button>
        </HStack>
        <CommentSection id={elem._id} elem={elem?.comments} />

        {/* All Comments  */}

        <HStack
          onClick={onOpen}
          _hover={{ cursor: "pointer" }}
          justifyContent={"flex-end"}
          px="2"
          w="full"
        >
          <Text
            color="blackAlpha.600"
            fontWeight={"500"}
            letterSpacing=".4px"
            fontSize={"12px"}
          >
            Most revelent
          </Text>
          <BsArrowDownShort />
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Comments</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack gap="1" pb="3">
                {elem?.comments?.map((el) => {
                  return <SingleComments {...el} />;
                })}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <HStack
          w="full"
          px="2"
          align="center"
          display={elem?.comments?.length == 0 ? "none" : "flex"}
        >
          <Avatar size="sm" src={elem?.comments[0]?.user_image} />
          <VStack
            fontSize="12px"
            bg="#f0f2f5"
            borderRadius={"30px"}
            px="6"
            py="7px"
            w="80%"
            align="start"
          >
            <Box mb="-2">
              <Text letterSpacing={".5px"} fontSize={"14px"} fontWeight={"600"}>
                {elem?.comments[0]?.user_name}
              </Text>
            </Box>
            <Text
              letterSpacing={".4px"}
              fontSize={"13px"}
              align="start"
              w="100%"
            >
              {elem?.comments[0]?.title}
            </Text>
          </VStack>
          <VStack>
            <Box
              shadow="lg"
              border="2px solid white"
              borderRadius={"full"}
              p="1"
              bg="#1877f2"
              h="fit-content"
            >
              <AiFillLike color="white" />
            </Box>
            <Box
              shadow="lg"
              borderRadius={"full"}
              p="1"
              bg="blackAlpha.100"
              h="fit-content"
              color={"black"}
              _hover={{
                bg: "blackAlpha.200",
                cursor: "pointer",
                color: "#1877f2",
              }}
            >
              <TbUserPlus />
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}

export default PostComponent;
