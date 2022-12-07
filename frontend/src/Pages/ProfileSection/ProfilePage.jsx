import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiFillCamera,
  AiFillEdit,
  AiFillPlusCircle,
  AiOutlineUserDelete,
} from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import { getUpdateProfile } from "../../redux/Auth/auth.actions";
import { uploadPost } from "../../redux/Posts/post.actions";
import {
  getSingleUserDetails,
  get_profile_info,
} from "../../redux/SingleUserDetail/single.actions";
import Loader from "../../utils/Loader";
import CoverPhoto from "./CoverPhoto";
import ProfileGrid from "./ProfileGrid";

function ProfilePage() {
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [profileData, setprofileData] = useState([]);
  const token = useSelector((state) => state?.auth?.data?.token);
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const pInfo = useSelector((state) => state?.singleUser?.profileInfo);
  const singleLoading = useSelector(
    (state) => state?.singleUser?.singleLoading
  );
  const userPosts = useSelector((state) => state?.singleUser?.userPosts);

  let email, id, password;

  if (token !== undefined) {
    [email, id, password] = token.split(":");
  }

  useEffect(() => {
    getSingleUserDetails(id);
  }, [dispatch]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

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
        let body = {
          image: res.data.url,
        };
        setloading(false);
        dispatch(getUpdateProfile(body, token, id));
      })
      .catch((err) => console.log(err));
  };

  const hanldeRemoveFriend = (image, name) => {
    let body = {
      user_name: name,
      user_image: image,
      type: "removeFriend",
    };

    axios
      .patch(`${process.env.REACT_APP_URL}/user`, body, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        dispatch(getSingleUserDetails(id));
        dispatch(get_profile_info(id));
      });
  };

  return singleLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Box shadow={"2xl"}>
        <Box position={"relative"} h="60vh" overflow="hidden" w="80%" m="auto">
          <Image
            src={user?.userDetails?.cover_image}
            objectFit={"cover"}
            w="100%"
            h="100%"
          />
          <CoverPhoto />
        </Box>

        <Flex gap="5" borderBottom={"1px solid gray"} pb="2" w="70%" m="auto">
          <Avatar
            mt="-50px"
            border="4px solid white"
            size={{ base: "lg", lg: "2xl" }}
            src={
              loading
                ? "https://media3.giphy.com/media/nR4L10XlJcSeQ/200.webp?cid=ecf05e47fi1tj25pvrvkaazvwa3higj6famnd0q1gro8o8uv&rid=200.webp&ct=g"
                : user?.userDetails?.image
            }
            position={"relative"}
          />

          <VStack align="start" w="full" p="2">
            <Heading fontSize={{ base: "16px", md: "35px" }}>
              {user?.fName} {user?.lName}
            </Heading>
            <Text
              onClick={onOpen}
              ref={btnRef}
              display={{ base: "none", md: "flex" }}
              fontWeight={"600"}
              color="blackAlpha.700"
              _hover={{ cursor: "pointer" }}
            >
              {" "}
              {pInfo?.friends?.length} friends
            </Text>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Friends 🤜🤛</DrawerHeader>
                <DrawerBody>
                  {pInfo?.friends?.length == 0 ? (
                    <Box w="full">
                      <Text
                        letterSpacing={".5px"}
                        fontWeight="500"
                        color="blackAlpha.700"
                      >
                        Sorry !! Please add the friends ☹️
                      </Text>
                      <Image src="https://i.ibb.co/wRv1TgV/undraw-Tree-swing-re-pqee.png" />
                    </Box>
                  ) : (
                    <VStack gap="1" align="start">
                      {pInfo?.friends?.map((item) => {
                        return (
                          <>
                            <HStack gap="4" w="full">
                              <Avatar size="md" src={item?.user_image} />
                              <Heading letterSpacing={".5px"} size="sm">
                                {item?.user_name}
                              </Heading>
                              <Box ml="auto" w="fit-content">
                                <Button
                                  _hover={{ bg: "none" }}
                                  bg="none"
                                  size="sm"
                                  onClick={() =>
                                    hanldeRemoveFriend(
                                      item?.user_image,
                                      item?.user_name
                                    )
                                  }
                                >
                                  <AiOutlineUserDelete size="20px" />
                                </Button>
                              </Box>
                            </HStack>

                            <Divider />
                          </>
                        );
                      })}
                    </VStack>
                  )}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Flex
              justifyContent="space-between"
              w="full"
              onClick={onOpen}
              _hover={{ cursor: "pointer" }}
            >
              <AvatarGroup size="sm" max={8}>
                {pInfo?.friends?.map((elem) => {
                  return <Avatar name="Segun Adebayo" src={elem?.user_image} />;
                })}
              </AvatarGroup>
              <HStack flexDirection={{ base: "column", lg: "row" }}>
                <Button
                  bgColor="#1b74e4"
                  color="white"
                  size="sm"
                  leftIcon={<AiFillPlusCircle />}
                  display={{ base: "none", lg: "flex" }}
                  onClick={() => navigate("/createstory")}
                >
                  Add to story
                </Button>
                <Button size="sm" leftIcon={<AiFillEdit />}>
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type={"file"}
                      accept="image/png, image/jpeg"
                      style={{ display: "none" }}
                      onChange={(e) => handleChange(e)}
                    />

                    <Text display={{ base: "none", md: "flex" }}>
                      {" "}
                      Edit profile Picture
                    </Text>
                  </label>
                </Button>
              </HStack>
            </Flex>
          </VStack>
        </Flex>

        <HStack
          py="5"
          w="70%"
          m="auto"
          fontSize="14px"
          color="blackAlpha.700"
          fontWeight={"600"}
          justifyContent="space-around"
        >
          <Text>About</Text>
          <Text>posts</Text>
        </HStack>
      </Box>
      <ProfileGrid userPosts={userPosts} />
    </>
  );
}

export default ProfilePage;
