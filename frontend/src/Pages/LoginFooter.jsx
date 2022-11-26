import { Flex, Grid, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const arr = [
  "English (UK)",
  "हिन्दी",
  "اردو",
  "ਪੰਜਾਬੀ",
  "বাংলা",
  "ગુજરાતી",
  "मराठी",
  "தமிழ்",
  "తెలుగు",
  "മലയാളം",
  "ಕನ್ನ",
];
const array = [
  "SignUp",
  "Login",
  "Messenger",
  "Facebook",
  "Lite",
  "Watch",
  "Places",
  "Games",
  "Marketplace",
  "Meta",
  "Pay",
  "Oculus",
  "Portal",
  "Instagram",
  "Bulletin",
  "Local",
  "Fundraisers",
  "Services",
  "Voting",
  "Information",
  "Centre",
  "Groups",
  "About",
  "Create",
  "ad",
  "Create Page",
  "Developers",
  "Careers",
  "Privacy",
  "Cookies",
  "AdChoices",
  "Terms",
  "Help",
  "Contact",
  "uploading",
  "non",
  "users",
  "Settings",
  "Activity",
  " log",
];

function LoginFooter() {
  return (
    <>
      <br />
      <Flex w='70%' m="auto" flexDirection={"column"}>
        <HStack spacing={4}>
          {arr?.map((el) => {
            return (
              <Text
                fontSize="10px"
                color="gray"
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {el}
              </Text>
            );
          })}
          <AddIcon />
        </HStack>
        <Grid
          gridTemplateColumns={"repeat(17,1fr)"}
          gap="1"
          mt="2"
          borderTop="1px solid gray"
          pt="2"
          textAlign={"start"}
        >
          {array?.map((el) => {
            return (
              <Text
                fontSize="11px"
                color="gray"
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {el}
              </Text>
            );
          })}
        </Grid>
        <br />
        <Text fontSize="11px" color="gray" textAlign={"start"}>
          Meta © 2022
        </Text>
      </Flex>
    </>
  );
}

export default LoginFooter;
