import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      pos="sticky"
      top={0}
      alignItems="center"
      h="10vh"
      backdropFilter="blur(10px)"
      zIndex={1000}
      shadow="sm"
      px={5}
    >
      <Flex
        align="center"
        justify="space-between"
        w="full"
        maxW="900px"
        m="auto"
      >
        <Logo />
        <Flex gap={5} display={{ base: "none", md: "flex" }}>
          <Text cursor="pointer" color={useColorModeValue("dark", "light")}>
            About
          </Text>
          <Text cursor="pointer" color={useColorModeValue("dark", "light")}>
            Projects
          </Text>
          <Text cursor="pointer" color={useColorModeValue("dark", "light")}>
            Contact
          </Text>
        </Flex>
        <Flex gap={5} align="center">
          <Icon cursor="pointer" as={FaFacebook} />
          <Icon cursor="pointer" as={FaLinkedin} />
          <Icon cursor="pointer" as={FaGithub} />
          <DarkModeToggle />
        </Flex>
      </Flex>
    </Flex>
  );
}
