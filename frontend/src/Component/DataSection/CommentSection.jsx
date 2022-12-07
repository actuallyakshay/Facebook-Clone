import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { PUT_COMMENT } from "../../redux/Posts/post.actions";

function CommentSection({ id, elem }) {
  const login_id = useSelector((state) => state?.auth?._id);
  const userDetails = useSelector((state) => state?.singleUser?.singleUserData);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const hanldleComment = (id) => {
    let body = {
      type: "comment",
      user_name: `${userDetails?.fName} ${userDetails?.lName}`,
      user_image: `${userDetails?.userDetails?.image}`,
      title: title,
    };
    dispatch(PUT_COMMENT(id, body));
    setTitle("")
  };

  return (
    <>
      <HStack px="2" w="full">
        <Avatar size="sm" src={userDetails?.userDetails?.image}>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <InputGroup size="sm">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            bg="#f0f2f5"
            borderRadius={"full"}
            pr="4.5rem"
            placeholder="Drop a comment here ! 💬"
            focusBorderColor="none"
          />
          <InputRightElement width="4.5rem">
            <Button
              variant={"ghost"}
              h="1.75rem"
              size="sm"
              onClick={() => hanldleComment(id)}
            >
              post
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
    </>
  );
}

export default CommentSection;
