import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import Logo from "../Logo";

export default function Footer() {
  return (
    <Box p={10} minH="10vh" bg="blackAlpha.400">
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={5}
        maxW="900px"
        m="auto"
        justify="space-between"
        align="center"
      >
        <Logo />
        <Text m="auto" textAlign="center">
          Copyright © 2022 Joshua Dela Cruz - All rights reserved.
        </Text>
        <Flex gap={5}>
          <Icon cursor="pointer" as={FaFacebook} />
          <Icon cursor="pointer" as={FaLinkedin} />
          <Icon cursor="pointer" as={FaGithub} />
        </Flex>
      </Flex>
    </Box>
  );
}
