import { Avatar, Box, Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_profile_info } from "../redux/SingleUserDetail/single.actions";

function FriendsShow({ el }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGo = (id) => {
    dispatch(get_profile_info(id));
    navigate("/user");
  };

  return (
    <>
      <HStack
        onClick={() => handleGo(el._id)}
        gap="2"
        w="full"
        _hover={{ cursor: "pointer" }}
        justifyContent={"space-between"}
      >
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
