import { Box, Flex, Progress, Spinner } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Flex
      h="90vh"
      w="100vw"
      justifyContent={"center"}
      alignItems="center"
      bg="white"
    >
      <Spinner
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
}

//https://media4.giphy.com/media/AAO7CYEKrIGfGphpFO/200w.webp?cid=ecf05e47c06bellvbwy42te3xgnqpsqalzzh0w3fo9t4iut9&rid=200w.webp&ct=g

export default Loader;
