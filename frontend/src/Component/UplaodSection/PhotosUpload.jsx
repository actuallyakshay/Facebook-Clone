import { DeleteIcon } from "@chakra-ui/icons";
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
  Image,
  Heading,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FcAddImage, FcVideoCall } from "react-icons/fc";
import { SocialIcon } from "react-social-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllPOSTS,
  getPOSTS,
  uploadPost,
} from "../../redux/Posts/post.actions";

export default function PhotoUpload() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const [caption, setCaption] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data?.token);
  const user = useSelector((state) => state?.singleUser?.singleUserData);

  const handleChange = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "Facebook");
    data.append("cloud_name", "dhxtxmw5n");
    setloading(true);
    axios
      .post(`https://api.cloudinary.com/v1_1/dhxtxmw5n/image/upload`, data)
      .then((res) => {
        setImage(res.data.url);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpload = () => {
    onClose();
    let body = {
      posts: {
        image,
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
        leftIcon={<FcAddImage />}
        bgColor={"white"}
        _hover={{ bgColor: "#f0f2f5" }}
      >
        {" "}
        {/*  */}
        <Text display={{ base: "none", md: "flex" }}>Photos</Text>
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
            <Button
              w="full"
              variant="outline"
              leftIcon={<FcAddImage />}
              bgColor={"white"}
              _hover={{ bgColor: "#f0f2f5" }}
            >
              <label style={{ cursor: "pointer" }}>
                <input
                  type={"file"}
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  onChange={(e) => handleChange(e)}
                />
                Upload Image here
              </label>
            </Button>
            <Textarea
              name="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              mt="2"
              border="1px dashed #D8D8D8"
              resize={"none"}
              placeholder="Enter the caption here ! 😍"
              variant="unstyled"
              px="5"
            />
            <Box
              mt="5"
              h="50vh"
              w="full"
              border="1px dashed #D8D8D8"
              overflow={"hidden"}
              position="relative"
            >
              <Button
                top="0"
                right="0"
                borderRadius={"30px"}
                zIndex="2"
                position="absolute"
                colorScheme={"facebook"}
                onClick={() => setImage("")}
                display={image !== "" ? "flex" : "none"}
              >
                <DeleteIcon color="white" />
              </Button>
              {loading ? (
                <Image
                  h="full"
                  w="full"
                  src="https://media3.giphy.com/media/nR4L10XlJcSeQ/200.webp?cid=ecf05e47fi1tj25pvrvkaazvwa3higj6famnd0q1gro8o8uv&rid=200.webp&ct=g"
                />
              ) : (
                <Image
                  src={
                    image == ""
                      ? "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1668764565/undraw_Playful_cat_re_ac9g_otvw4x.png"
                      : image
                  }
                  opacity=".7"
                  mt="6"
                  m="auto"
                  objectFit="cover"
                />
              )}
            </Box>
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
