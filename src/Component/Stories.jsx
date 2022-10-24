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
  "https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/312902837_3322348451364701_1529533510171976340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=NPsutTOpkFIAX9T2k8t&_nc_ht=scontent.fagr1-4.fna&oh=00_AT94vXZn0gj03M-czaN7wnbYIprdLnjJOjh7h-cES3Bexw&oe=635BA2DA",
  "https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/311657879_2468386149978049_1516791698273125585_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=G9o-9hxS0AsAX_5wnMW&_nc_oc=AQnj15Js2TYwqH_iE2xUH2mxkFGuugxOxG7SzF9wzJGkZjlgX4RY2O647W6vwAvaq1QTduCIzMtjswxr5LPQfokN&_nc_ht=scontent.fagr1-1.fna&oh=00_AT-Z_4lDm_FtitICw0v9gd72S038loK-cCwN6oJypyo5rw&oe=635BB668",
  "https://scontent.fagr1-2.fna.fbcdn.net/v/t39.30808-6/311487850_2468386719977992_6656991070580735532_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=l-GsJNHbGb4AX_veYYx&_nc_ht=scontent.fagr1-2.fna&oh=00_AT-fSQZQJ4qoLX3ruhkaF8khK8Z1cI_qth6JUpfKH-mIsg&oe=635C7529",
  "https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/312902837_3322348451364701_1529533510171976340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=NPsutTOpkFIAX9T2k8t&_nc_ht=scontent.fagr1-4.fna&oh=00_AT94vXZn0gj03M-czaN7wnbYIprdLnjJOjh7h-cES3Bexw&oe=635BA2DA",
  "https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/311657879_2468386149978049_1516791698273125585_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=G9o-9hxS0AsAX_5wnMW&_nc_oc=AQnj15Js2TYwqH_iE2xUH2mxkFGuugxOxG7SzF9wzJGkZjlgX4RY2O647W6vwAvaq1QTduCIzMtjswxr5LPQfokN&_nc_ht=scontent.fagr1-1.fna&oh=00_AT-Z_4lDm_FtitICw0v9gd72S038loK-cCwN6oJypyo5rw&oe=635BB668",
  "https://scontent.fagr1-2.fna.fbcdn.net/v/t39.30808-6/311487850_2468386719977992_6656991070580735532_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=l-GsJNHbGb4AX_veYYx&_nc_ht=scontent.fagr1-2.fna&oh=00_AT-fSQZQJ4qoLX3ruhkaF8khK8Z1cI_qth6JUpfKH-mIsg&oe=635C7529",
];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Carousel() {
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
      {/* <Flex flexDirection={"column"} gap="20px"> */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {arr.map((el, index) => (
          <>
            <Box
              // border="2px solid green"
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
                zIndex='3'
              />
              <Image
                src={el}
                w="100%"
                _hover={{ transform: "scale(1.1)", transformOrigin: "50% 50%" }}
                transition="transform .5s"
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

// #f0f2f5
