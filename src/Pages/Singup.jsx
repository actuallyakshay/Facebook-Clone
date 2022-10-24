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
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Input,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { QuestionIcon, ChevronDownIcon } from "@chakra-ui/icons";

function Singup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Flex w="full" justifyContent={"center"}>
        <Button colorScheme="whatsapp" w="60%" m="auto" onClick={onOpen}>
          Create New Account
        </Button>
      </Flex>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="380px">
          <Flex flexDirection={"column"} gap="2" px="6" mb="1" mt="2">
            <Heading size="lg">Sign Up</Heading>
            <Text color="gray" fontSize="14px">
              It's quick and easy.
            </Text>
          </Flex>
          <hr />
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems="flex-start">
              <HStack>
                <Input type="text" placeholder="First name" required />
                <Input type="text" placeholder="Surname" required />
              </HStack>
              <Input type="text" placeholder="Email address" />
              {/* TODO: */}
              <Input type="text" placeholder="New Password" />
              <Text fontSize="10px">
                Date of birth ? <QuestionIcon />{" "}
              </Text>
              <HStack>
                <Input type="Number" placeholder="Date" />
                <Input type="Month" placeholder="month" />
                <Input type="year" placeholder="year" />
              </HStack>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      w="full"
                      bgColor="white"
                      //   varient='ghost'
                      _focus={{ backgroundColor: "white" }}
                      border="1px solid 	#E8E8E8"
                    >
                      Gender
                    </MenuButton>
                    <MenuList w="100%">
                      <MenuItem>Male</MenuItem>
                      <MenuItem>Female</MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
              <Text fontSize={"9px"} color="gray">
                People who use our service may have uploaded your contact
                information to Facebook. Learn more.
                <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button colorScheme="whatsapp" onClick={onClose} w="180px">
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Singup;
