import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import Navlink from "./Navlink";

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
          <Navlink to="about">About</Navlink>
          <Navlink to="projects">Projects</Navlink>
          <Navlink to="contact">Contact</Navlink>
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
