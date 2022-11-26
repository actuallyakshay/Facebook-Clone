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
import { AiFillCamera } from "react-icons/ai";
import { getUpdateProfile } from "../../redux/Auth/auth.actions";
import { get_profile_info } from "../../redux/SingleUserDetail/single.actions";

export default function CoverPhoto() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const [caption, setCaption] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data?.token);
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const [email, id, password] = token.split(":");

  useEffect(() => {}, [dispatch]);

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
      cover_image: image,
    };
    dispatch(getUpdateProfile(body, token, id));
    // setTimeout(() => {

    // }, 1);

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
        leftIcon={<AiFillCamera />}
        position={"absolute"}
        size="sm"
        bottom="5"
        right="3%"
        bgColor="white"
        onClick={onOpen}
      >
        Edit Cover photo
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
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
                Upload Cover photo here !
              </label>
            </Button>
            <Box
              mt="5"
              h="60vh"
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
                <Heading>...loading</Heading>
              ) : (
                <Image
                  src={
                    image == ""
                      ? "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1668764565/undraw_Playful_cat_re_ac9g_otvw4x.png"
                      : image
                  }
                  // opacity=".7"
                  mt="6"
                  h="100%"
                  w="100%"
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
