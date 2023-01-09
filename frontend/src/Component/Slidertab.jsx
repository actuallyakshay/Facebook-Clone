import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import Carousel from "./Stories";
import Reels from "./Reels";
import Rooms from "./Rooms";
import Upload from "./Upload";
import PostComponent from "./DataSection/PostComponent";
function Slidertab({ postData }) {
  return (
    <Flex w="100%" flexDirection={"column"}>
      <Tabs
        w={{ base: "95%", sm: "80%", md: "65%", lg: "75%" }}
        mx="auto"
        mt="5"
        h={{ base: "200px", sm: "210px", md: "250px", lg: "260px" }}
        // h={"30vh"}
        borderRadius="10px"
        bgColor={"white"}
        px="0"
        paddingBottom={"1"}
        border={"1px solid #E8E8E8"}
      >
        <TabList
          w="100%"
          display={"grid"}
          gridTemplateColumns="repeat(3,1fr)"
          color="blackAlpha.700"
        >
          <Tab py="4" fontSize="13px" letterSpacing={"1px"} fontWeight="500">
            Stories
          </Tab>
          <Tab py="4" fontSize="13px" letterSpacing={"1px"} fontWeight="500">
            Reels
          </Tab>
          <Tab py="4" fontSize="13px" letterSpacing={"1px"} fontWeight="500">
            Groups
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel position={"relative"}>
            <Carousel />
          </TabPanel>
          <TabPanel position={"relative"}>
            <Reels />
          </TabPanel>
          <TabPanel position={"relative"}>
            <Rooms />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <br />
      <Upload />
      {postData?.map((elem, i) => {
        return <PostComponent key={i} elem={elem} />;
      })}
    </Flex>
  );
}

export default Slidertab;
