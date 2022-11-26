import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Textarea,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcAddImage, FcNeutralDecision, FcVideoCall } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { SocialIcon } from "react-social-icons";
import { uploadPost } from "../../redux/Posts/post.actions";

export default function FeelingsUpload() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caption, setCaption] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data?.token);
  const user = useSelector((state) => state?.singleUser?.singleUserData);

  const handleUpload = () => {
    onClose();
    let body = {
      posts: {
        caption,
      },
    };
    dispatch(uploadPost(body, token));
    toast({
      title: `Hey !! ${user?.fName} `,
      description: "Congrats !! post uploaded successfully",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FcNeutralDecision />}
        bgColor={"white"}
        _hover={{ bgColor: "#f0f2f5" }}
      >
        <Text display={{ base: "none", md: "flex" }}>Feeling/Activity</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <SocialIcon
              network="facebook"
              bgColor="#1877f2"
              style={{ height: 40, width: 40 }}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              mt="2"
              onChange={(e) => setCaption(e.target.value)}
              border="1px dashed #D8D8D8"
              resize={"none"}
              variant="unstyled"
              px="5"
              placeholder="What you are felling right now? ! 😍"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              letterSpacing={".8px"}
              w="full"
              size="sm"
              colorScheme="facebook"
              onClick={handleUpload}
            >
              UPLOAD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
