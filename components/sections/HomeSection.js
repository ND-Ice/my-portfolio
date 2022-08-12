import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

export default function HomeSection() {
  return (
    <Box display="grid" placeItems="center" minH="90vh">
      <Box textAlign="center">
        <Heading
          fontSize="6xl"
          textTransform="uppercase"
          fontWeight="extrabold"
          color={useColorModeValue("dark", "light")}
        >
          <Text as="span" color="accent.base">
            Joshua{" "}
          </Text>
          Dela Cruz
        </Heading>
        <Divider my={2} />
        <Text fontSize="xl" maxW="60ch" m="auto">
          A 22 years old passionate and aspiring{" "}
          <Text as="span" color="accent.base" textTransform="uppercase">
            Front-End Developer
          </Text>{" "}
          based in San Juan City Metro Manila Philippines
        </Text>
        <Divider my={5} />
        <Flex gap={2} mt={5} justify="center" flexWrap="wrap">
          <Button>Me</Button>
          <Button>My Projects</Button>
          <Button>Connect with Me</Button>
        </Flex>
      </Box>
    </Box>
  );
}
