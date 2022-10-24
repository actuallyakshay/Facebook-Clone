import React from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import Carousel from "./Stories";
function Slidertab() {
  return (
    <>
      <Tabs
        border="2px solid red"
        w={{ base: "95%", lg: "70%" }}
        mx="auto"
        mt="5"
        h="250px"
        borderRadius="10px"
        // position={"relative"}
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
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Slidertab;
