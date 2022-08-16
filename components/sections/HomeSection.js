import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

import Navlink from "../Navlink";

export default function HomeSection() {
  return (
    <Box display="grid" placeItems="center" minH="90vh" px={5}>
      <Box textAlign="center">
        <Heading
          fontSize="6xl"
          textTransform="uppercase"
          fontWeight="extrabold"
          lineHeight={1}
          color={useColorModeValue("dark", "light")}
        >
          <Text as="span" color="accent.base">
            Joshua{" "}
          </Text>
          Dela Cruz
        </Heading>
        <Divider my={5} />
        <Text fontSize="xl" maxW="60ch" m="auto">
          A 22 years old passionate and aspiring{" "}
          <Text as="span" color="accent.base" textTransform="uppercase">
            Front-End Developer
          </Text>{" "}
          based in San Juan City Metro Manila Philippines
        </Text>
        <Divider my={5} />
        <Flex gap={2} mt={5} justify="center" flexWrap="wrap">
          <Navlink to="about">
            <Button>Me</Button>
          </Navlink>
          <Navlink to="projects">
            <Button>My Projects</Button>
          </Navlink>
          <Navlink to="contact">
            <Button>Connect with Me</Button>
          </Navlink>
        </Flex>
      </Box>
    </Box>
  );
}
