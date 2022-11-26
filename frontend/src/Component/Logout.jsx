import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { sign_out_func } from "../redux/Auth/auth.actions";
function Logout() {

  const dispatch = useDispatch()

  const hanldeLogout = () => {
    dispatch(sign_out_func())
  };

  return (
    <>
      <Flex
        onClick={() => hanldeLogout()}
        _hover={{ cursor: "pointer" }}
        alignItems={"center"}
        gap="3"
      >
        <Box p="2" borderRadius={"50%"} bgColor="blackAlpha.200" color="black">
          <RiLogoutBoxRFill />
        </Box>
        <Text color="#050505" fontWeight="500" fontSize="13px">
          Log Out
        </Text>
      </Flex>
    </>
  );
}

export default Logout;
