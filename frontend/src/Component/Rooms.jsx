import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Flex,
  Avatar,
  VStack,
  Button,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arr = [
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
  "https://www.youtube.com/embed/wI2vqXsjsIo",
];

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Rooms() {
  const [slider, setSlider] = useState();

  const [hide, setHide] = useState(true);

  const handleClick = (i) => {
    setHide(false);
  };
  return (
    <Box
      position={"absolute"}
      height={{ base: "130px", sm: "160px", md: "185px", lg: "190px" }}
      width="100%"
      //   border="2px solid blue"
      overflow={"hidden"}
      top="0"
      left="0"
      mt="2"
    >
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        top="50%"
        left="3%"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {
          slider?.slickPrev();
        }}
        bgColor="white"
      >
        <BiLeftArrowAlt />
      </IconButton>

      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        top="50%"
        right="1%"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        bgColor="white"
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* <Flex flexDirection={"column"} gap="20px"> */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {arr.map((el, index) => (
          <>
            <VStack
              border="1px solid gray"
              height={{
                base: "130px",
                sm: "160px",
                md: "165px",
                lg: "180px",
              }}
              key={index}
              ml="2"
              borderRadius="10px"
              overflow={"hidden"}
              position="relative"
              onClick={() => handleClick(index)}
              pt="3"
                    px="3"
                    _hover={{bgColor:'blackAlpha.100'}}
            >
              <Avatar
                size="md"
                src="https://avatars.githubusercontent.com/u/107462720?v=4"
              />
              <Text
                display={{ base: "none", md: "flex" }}
                fontSize={{ base: "10px", md: "14px" }}
              >
                Akshay Rajput
              </Text>
              <br />
              <Button
                fontSize={"13px"}
                variant={"outline"}
                color="#1877f2"
                w="full"
              >
                Say Hi
              </Button>
            </VStack>
          </>
        ))}
      </Slider>
      {/* </Flex> */}
    </Box>
  );
}
