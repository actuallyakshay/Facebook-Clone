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
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Reels() {
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
            <Box
              border="2px solid green"
              height="100%"
              ml="2"
              borderRadius="10px"
              overflow={"hidden"}
              _hover={{ transform: "scale(1.02)", transformOrigin: "50% 50%" }}
              transition="transform .5s"
              position="relative"
              onClick={() => handleClick(index)}
            >
              {/* TODO: */}
              <Avatar
                position="absolute"
                size="sm"
                top="4%"
                left="7%"
                src="https://avatars.githubusercontent.com/u/107462720?v=4"
                border={hide ? "2px solid #1877f2" : "2px solid white"}
              />
              <Box
                as="iframe"
                src={el}
                width="100%"
                height={{
                  base: "130px",
                  sm: "160px",
                  md: "165px",
                  lg: "170px",
                }}
                sx={{
                  aspectRatio: "10/12",
                }}
              />
              <Text
                position={"absolute"}
                color="white"
                fontSize="14px"
                bottom="3%"
                left="7%"
                letterSpacing={".5px"}
                fontWeight="500"
              >
                Akshay
              </Text>
            </Box>
          </>
        ))}
      </Slider>
      {/* </Flex> */}
    </Box>
  );
}
