import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <Box
      as="nav"
      pos="sticky"
      top={0}
      p={5}
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <Flex align="center" justify="space-between" maxW="900px" m="auto">
        <Logo />
        <Flex gap={5}>
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
        <Flex>
          <IconButton
            variant="ghost"
            color={useColorModeValue("dark", "light")}
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaFacebook />}
          />
          <IconButton
            variant="ghost"
            color={useColorModeValue("dark", "light")}
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaLinkedin />}
          />
          <IconButton
            variant="ghost"
            color={useColorModeValue("dark", "light")}
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaGithub />}
          />
          <DarkModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}
