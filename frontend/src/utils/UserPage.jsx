import Navbar from "../Component/Navbar";
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
  Grid,
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
import { getUpdateProfile } from "../redux/Auth/auth.actions";
import { get_profile_info } from "../redux/SingleUserDetail/single.actions";
import ProfileGrid from "../Pages/ProfileSection/ProfileGrid";
import CoverPhoto from "../Pages/ProfileSection/CoverPhoto";
import { AiFillHome, AiOutlineArrowDown, AiOutlineMail } from "react-icons/ai";
import { BsGenderMale, BsHeartFill } from "react-icons/bs";
import { FaBirthdayCake, FaPhoneSquare, FaSchool } from "react-icons/fa";
import { ImManWoman, ImQuotesLeft } from "react-icons/im";
import { SiAboutdotme, SiEventbrite } from "react-icons/si";
import {
  MdFollowTheSigns,
  MdLocationOn,
  MdWork,
  MdWorkOff,
} from "react-icons/md";
import PostComponent from "../Component/DataSection/PostComponent";
import Loader from "./Loader";

function UserPage() {
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [profileData, setprofileData] = useState([]);
  const token = useSelector((state) => state?.auth?.data?.token);
  const user = useSelector((state) => state?.singleUser?.singleUserData);
  const pInfo = useSelector((state) => state?.singleUser?.profileInfo);
  const pINFOLOADING = useSelector((state) => state?.singleUser?.pINFOLOADING);
  const userPosts = useSelector((state) => state?.singleUser?.userPosts);

  let email, id, password;

  if (token !== undefined) {
    [email, id, password] = token.split(":");
  }

  useEffect(() => {}, [dispatch]);
  const btnRef = React.useRef();

  return pINFOLOADING ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Box shadow={"2xl"}>
        <Box position={"relative"} h="55vh" overflow="hidden" w="80%" m="auto">
          <Image
            src={pInfo?.userDetails?.cover_image}
            objectFit={"cover"}
            w="100%"
            h="100%"
          />
        </Box>

        <Flex gap="5" borderBottom={"1px solid gray"} pb="2" w="70%" m="auto">
          <Avatar
            mt="-50px"
            border="4px solid white"
            size={{ base: "lg", lg: "2xl" }}
            src={
              loading
                ? "https://media2.giphy.com/media/VseXvvxwowwCc/200w.webp?cid=ecf05e47gzdrk4j9x1cxmjfs914ldc03qslrnwwhmue1366t&rid=200w.webp&ct=g"
                : pInfo?.userDetails?.image
            }
            position={"relative"}
          />

          <VStack align="start" w="full" p="2">
            <Heading fontSize={{ base: "16px", md: "35px" }}>
              {pInfo?.fName} {pInfo?.lName}
            </Heading>
            <Text
              ref={btnRef}
              display={{ base: "none", md: "flex" }}
              fontWeight={"600"}
              color="blackAlpha.700"
              _hover={{ cursor: "pointer" }}
            >
              {" "}
              {pInfo?.friends?.length} friends
            </Text>
            <Flex
              justifyContent="space-between"
              w="full"
              _hover={{ cursor: "pointer" }}
            >
              <AvatarGroup size="sm" max={8}>
                {pInfo?.friends?.map((elem, i) => {
                  return (
                    <Avatar
                      key={i}
                      name="Segun Adebayo"
                      src={elem?.user_image}
                    />
                  );
                })}
              </AvatarGroup>
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
      <Box w="full" bg="#f0f2f5">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 2fr" }}
          w={{ base: "95%", sm: "95%", md: "80%", lg: "78%" }}
          m="auto"
          pt="5"
          position={"relative"}
        >
          <VStack
            bg="white"
            align={"start"}
            px="3"
            py="1"
            position={{ base: "", md: "sticky" }}
            top="10%"
            h="110vh"
            overflow={"auto"}
          >
            <Heading size="sm">Intro</Heading>
            <HStack w="full" justifyContent={"center"}>
              <Text>
                {!pInfo?.userDetails?.bio
                  ? "Please! update your bio"
                  : pInfo?.userDetails?.bio}
              </Text>
            </HStack>
            <Divider />
            <VStack align="start" gap="1">
              <HStack>
                <AiFillHome color="gray" />
                <Text fontSize="14px">lives in</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.lives_in}
                </Text>
              </HStack>
              <HStack>
                <MdLocationOn color="gray" />
                <Text fontSize="14px">From</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.lives_in}
                </Text>
              </HStack>
              <HStack>
                <BsHeartFill color="gray" />
                <Text fontSize="14px">Status</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.status}
                </Text>
              </HStack>
              <HStack>
                <MdFollowTheSigns color="gray" />
                <Text fontSize="14px">followed by</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.followers?.length}
                </Text>
              </HStack>
            </VStack>
            <VStack align="start" gap="2">
              <HStack>
                <AiOutlineMail color="gray" />
                <Text fontSize="13px">Email</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.email}
                </Text>
              </HStack>
              <HStack>
                <FaBirthdayCake color="gray" />
                <Text fontSize="13px">Birthday</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.date}-{pInfo?.month}-{pInfo?.year}
                </Text>
              </HStack>
              <HStack>
                <BsGenderMale color="gray" />
                <Text fontSize="13px">Gender</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.gender}
                </Text>
              </HStack>
              <HStack>
                <MdWork color="gray" />
                <Text fontSize="13px">Works At</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.works_at}
                </Text>
              </HStack>
              <HStack>
                <MdWorkOff color="gray" />
                <Text fontSize="13px">Worked at</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.worked_at[0]}
                </Text>
              </HStack>
              <HStack>
                <FaPhoneSquare color="gray" />
                <Text fontSize="13px">Number</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.number}
                </Text>
              </HStack>
              <HStack>
                <FaSchool color="gray" />
                <Text fontSize="13px">School</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.school}
                </Text>
              </HStack>
              <HStack>
                <ImManWoman color="gray" />
                <Text fontSize="13px">Interested in</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.intersted_in}
                </Text>
              </HStack>
              <HStack>
                <SiAboutdotme color="gray" />
                <Text fontSize="13px">About you</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.about_you}
                </Text>
              </HStack>
              <HStack>
                <ImQuotesLeft color="gray" />
                <Text fontSize="13px">favourite quote</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.favourite_quote}
                </Text>
              </HStack>
              <HStack>
                <SiEventbrite color="gray" />
                <Text fontSize="13px">Life event</Text>
                <Text fontSize="14px" fontWeight={"500"}>
                  {" "}
                  {pInfo?.userDetails?.life_event[0]}
                </Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack pt="0" w="full">
            {userPosts?.map((elem, i) => {
              return <PostComponent key={i} elem={elem} />;
            })}
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default UserPage;
