import React from "react";
import { CgMenuRight } from "react-icons/cg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  HStack,
  Text,
  Switch,
  Divider,
} from "@chakra-ui/react";
import { MdPhoneCallback } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { CiLollipop } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";

function Friendsonline() {
  return (
    <>
      <Menu>
        <MenuButton
          borderRadius={"full"}
          _hover={{ bgColor: "blackAlpha.100" }}
          as={Button}
          rightIcon={<CgMenuRight />}
        ></MenuButton>
        <MenuList color="blackAlpha.900" w="280px" p="2" fontSize={"15px"}>
          <HStack justifyContent={"space-between"}>
            <HStack>
              <MdPhoneCallback />
              <Text>Incoming call sound</Text>
            </HStack>
            <Switch />
          </HStack>
          <HStack justifyContent={"space-between"} mt="3">
            <HStack>
              <SiGooglemessages />
              <Text>Message sound</Text>
            </HStack>
            <Switch />
          </HStack>
          <HStack justifyContent={"space-between"} mt="3">
            <HStack>
              <CiLollipop />
              <Text>Pop up new message</Text>
            </HStack>
            <Switch />
          </HStack>
          <Text textAlign={"start"} mt="2" ml="4" fontSize={"9px"} color="gray">
            Automaticlly open new messages{" "}
          </Text>
          <Divider mt="2" />
          <HStack mb="2" justifyContent={"space-between"} mt="3">
            <HStack>
              <GrContactInfo />
              <Text>Show Contacts</Text>
            </HStack>
            <Switch />
          </HStack>
          <Divider mt='2'/>
          <MenuItem>All Friends</MenuItem>
          <MenuItem>Online Friends</MenuItem>
          <MenuItem>Offline friends</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Friendsonline;
