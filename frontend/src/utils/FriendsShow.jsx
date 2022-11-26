import { Avatar, Box, Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";

function FriendsShow({ el }) {
    const handleAdd = () => {
      
  };

  return (
    <>
      <HStack gap="2" w="full" justifyContent={"space-between"}>
        <HStack>
          <Avatar size="sm" src={el?.userDetails?.image} />
          <Heading letterSpacing={".5px"} size="xs" fontWeight={"400"}>
            {el?.fName} {el?.lName}
          </Heading>
        </HStack>
        <Box w="fit-content">
          <Button
            onClick={() => handleAdd()}
            _hover={{ bg: "none" }}
            bg="none"
            size="sm"
          >
            <IoPersonAddSharp size="18px" />
          </Button>
        </Box>
      </HStack>
    </>
  );
}

export default FriendsShow;
