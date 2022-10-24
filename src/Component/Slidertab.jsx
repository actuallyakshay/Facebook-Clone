import React from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from "@chakra-ui/react";
import Carousel from "./Stories";
import Reels from "./Reels";
import Rooms from "./Rooms";
import Upload from "./Upload";
function Slidertab() {
  return (
    <Flex flexDirection={"column"}>
      <Tabs
        // border="2px solid red"
        w={{ base: "95%", lg: "75%" }}
        mx="auto"
        mt="5"
        h={{ base: "200px", sm: "210px", md: "250px", lg: "260px" }}
        borderRadius="10px"
        // position={"relative"}
        bgColor={"white"}
        px="0"
        paddingBottom={"1"}
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
            Rooms
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
      <Upload />
    </Flex>
  );
}

export default Slidertab;
