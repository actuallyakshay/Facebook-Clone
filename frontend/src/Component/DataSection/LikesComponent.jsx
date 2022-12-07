import React from "react";
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
} from "@chakra-ui/react";
import SingleLikeSection from "./SingleLikeSection";

function LikesComponent({ elem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        onClick={onOpen}
        _hover={{ cursor: "pointer" }}
        justifyContent={"flex-end"}
        px="2"
        w="full"
      >
        <Text> likes count : {elem?.length}</Text>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="300px" >
          <ModalHeader>Likes 👍 : {elem?.length} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {elem?.length != 0 ? (
              <VStack gap="3" pb="3" align="start">
                {elem?.map((el, i) => {
                  return <SingleLikeSection key={i} {...el} />;
                })}
              </VStack>
            ) : (
              <VStack>
                <Heading size="md" fontWeight={"400"} color="blackAlpha.800">
                  No One liked your post 💔😿
                </Heading>
                <Image src="https://i.ibb.co/gmLVqQG/undraw-feeling-blue-4b7q.png" />
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LikesComponent;
