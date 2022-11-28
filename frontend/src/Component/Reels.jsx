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
import { GiTruce } from "react-icons/gi";

const arr = [
  "https://www.youtube.com/embed/fkWD1PQ4c9c",
  "https://www.youtube.com/embed/7Ic35HSYgvM",
  "https://www.youtube.com/embed/ubjqDk4LA9U",
  "https://www.youtube.com/embed/0GnzEAGhRkE",
  "https://www.youtube.com/embed/sMDh_nNws5Q",
  "https://www.youtube.com/embed/tNXEGFnTHVE",
  "https://www.youtube.com/embed/KNss0wBm4G8",
  "https://www.youtube.com/embed/wH4fW-Z2vO0",
];

const settings = {
  infinite: GiTruce,
  speed: 500,
  slidesToShow: 3,
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
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {arr.map((el, index) => (
          <>
            <Box
              key={index}
              height="100%"
              ml="2"
              allowfullscreen="true"
              borderRadius="8px"
              overflow={"hidden"}
              position="relative"
              onClick={() => handleClick(index)}
            >
              <Box
                as="iframe"
                src={el}
                width="100%"
                height={{
                  base: "130px",
                  sm: "160px",
                  md: "165px",
                  lg: "190px",
                }}
                sx={{
                  aspectRatio: "10/12",
                }}
              />
            </Box>
          </>
        ))}
      </Slider>
    </Box>
  );
}
