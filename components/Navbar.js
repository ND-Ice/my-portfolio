import { FaFacebook, FaLinkedin, FaGithub, FaSun } from "react-icons/fa";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <Box
      as="nav"
      pos="sticky"
      top={0}
      p={5}
      bg="blackAlpha.400"
      backdropFilter="blur(10px)"
      zIndex={1000}
    >
      <Flex align="center" justify="space-between" maxW="900px" m="auto">
        <Logo />
        <Flex gap={5}>
          <Text cursor="pointer" color="light">
            About
          </Text>
          <Text cursor="pointer" color="light">
            Projects
          </Text>
          <Text cursor="pointer" color="light">
            Contact
          </Text>
        </Flex>
        <Flex>
          <IconButton
            variant="ghost"
            color="light"
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaFacebook />}
          />
          <IconButton
            variant="ghost"
            color="light"
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaLinkedin />}
          />
          <IconButton
            variant="ghost"
            color="light"
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaGithub />}
          />
          <IconButton
            variant="ghost"
            color="light"
            size="lg"
            _hover={{ color: "accent.base" }}
            icon={<FaSun />}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
