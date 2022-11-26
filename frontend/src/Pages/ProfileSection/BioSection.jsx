import {
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import {
  MdFollowTheSigns,
  MdLocationOn,
  MdWork,
  MdWorkOff,
} from "react-icons/md";
import { AiFillHome, AiOutlineArrowDown, AiOutlineMail } from "react-icons/ai";
import { BsGenderMale, BsHeartFill } from "react-icons/bs";
import { FaBirthdayCake, FaPhoneSquare, FaSchool } from "react-icons/fa";
import { ImManWoman, ImQuotesLeft } from "react-icons/im";
import { SiAboutdotme, SiEventbrite } from "react-icons/si";
import CompleteYourProfile from "./CompleteYourProfile";
import { useSelector } from "react-redux";

function BioSection() {
  const pInfo = useSelector((state) => state?.singleUser?.profileInfo);
  return (
    <>
      <VStack
        bg="white"
        align={"start"}
        px="3"
        py="1"
        position={{ base: "", md: "sticky" }}
        top="10%"
        h="90vh"
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
        <CompleteYourProfile />

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
    </>
  );
}

export default BioSection;
