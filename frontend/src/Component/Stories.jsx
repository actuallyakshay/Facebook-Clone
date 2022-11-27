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
import OwnStory from "../utils/OwnStory";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { single_story } from "../redux/Story/story.actions";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState();
  const storyData = useSelector((state) => state?.story?.stories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (el) => {
    navigate("/singleStory");
    dispatch(single_story(el));
  };
  return (
    <Box
      position={"absolute"}
      height={{ base: "130px", sm: "160px", md: "185px", lg: "190px" }}
      width="100%"
      // border="2px solid blue"
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
        <OwnStory />
        {storyData?.map((el, index) => (
          <>
            <Box
              height={{
                base: "130px",
                sm: "160px",
                md: "165px",
                lg: "190px",
              }}
              ml="2"
              _hover={{ cursor: "pointer" }}
              borderRadius="10px"
              overflow={"hidden"}
              position="relative"
              key={index}
              onClick={() => handleClick(el)}
            >
              {/* TODO: */}
              <Avatar
                position="absolute"
                size="sm"
                top="4%"
                left="7%"
                src={el?.user?.userDetails?.image}
                border={"2px dashed #1877f2"}
                zIndex="3"
              />
              <Image
                src={el?.image}
                w="100%"
                _hover={{ transform: "scale(1.1)", transformOrigin: "50% 50%" }}
                transition="transform .5s"
                objectFit={"cover"}
                h="full"
              />
              <Text
                position={"absolute"}
                color="black"
                fontSize="13px"
                bottom="3%"
                left="7%"
                letterSpacing={".5px"}
                fontWeight="500"
                bg="white"
                px="1"
                borderRadius={"10px"}
              >
                {el?.user?.fName} 
              </Text>
            </Box>
          </>
        ))}
      </Slider>
    </Box>
  );
}
