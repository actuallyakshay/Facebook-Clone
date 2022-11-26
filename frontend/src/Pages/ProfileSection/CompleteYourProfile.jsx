import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import FormInput from "./FormInput";

function CompleteYourProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg="blackAlpha.200"
        _hover={{ bg: "blackAlpha.300" }}
        w={"full"}
        size="sm"
        onClick={onOpen}
      >
        Complete your profile
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Complete you profile ❤️</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormInput onClose={onClose} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CompleteYourProfile;
