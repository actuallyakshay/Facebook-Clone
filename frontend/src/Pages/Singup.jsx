import React, { useState } from "react";
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
  Select,
  useToast,
} from "@chakra-ui/react";
import { QuestionIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../redux/Auth/auth.actions";

function Singup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    date: "",
    month: "",
    year: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (form) => {
    if (form.email.length <= 4 && !form.email.split("").includes("@")) {
      return toast({
         title: "OOPPPSS !!! ☹️",
         description: "Please enter valid email",
         status: "warning",
         duration: 2000,
         position: "top",
         isClosable: true,
       });
    }
    dispatch(getAuth(form));
    onClose();
    toast({
      title: "Welcome ! ❤️",
      description: "Account created Successfully",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

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
                <Input
                  name="fName"
                  value={form.fName}
                  type="text"
                  placeholder="First name"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="lName"
                  value={form.lName}
                  type="text"
                  placeholder="Surname"
                  required
                  onChange={(e) => handleChange(e)}
                />
              </HStack>
              <Input
                name="email"
                value={form.email}
                type="email"
                placeholder="Email address"
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="password"
                value={form.password}
                type="text"
                placeholder="New Password"
                onChange={(e) => handleChange(e)}
              />
              <Text fontSize="10px">
                Date of birth ? <QuestionIcon />{" "}
              </Text>
              <HStack>
                <Input
                  name="date"
                  value={form.date}
                  type="Number"
                  placeholder="Date"
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="month"
                  value={form.month}
                  type="Month"
                  placeholder="month"
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name="year"
                  value={form.year}
                  type="year"
                  placeholder="year"
                  onChange={(e) => handleChange(e)}
                />
              </HStack>
              <Select name="gender" onClick={(e) => handleChange(e)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
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
            <Button
              onClick={() => handleSubmit(form)}
              colorScheme="whatsapp"
              w="180px"
            >
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Singup;
