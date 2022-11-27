import { Avatar, Box, Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";

function FriendsShow({ el }) {

  return (
    <>
      <HStack gap="2" w="full" justifyContent={"space-between"}>
        <HStack>
          <Avatar size="sm" src={el?.userDetails?.image} />
          <Heading letterSpacing={".5px"} size="xs" fontWeight={"400"}>
            {el?.fName} {el?.lName}
          </Heading>
        </HStack>
      </HStack>
    </>
  );
}

export default FriendsShow;
