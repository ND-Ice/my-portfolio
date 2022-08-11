import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomeSection() {
  return (
    <Box p={10} display="grid" placeItems="center" minH="90vh">
      <Box textAlign="center">
        <Heading
          fontSize="6xl"
          textTransform="uppercase"
          color={useColorModeValue("dark", "light")}
        >
          Joshua Dela Cruz
        </Heading>
        <Text fontSize="2xl" color={useColorModeValue("dark", "light")}>
          Aspiring Front-End Developer |
          <Text ml={1} as="span" color="accent.base">
            INTERN
          </Text>
        </Text>
        <Flex gap={2} mt={5} justify="center">
          <Button bg="red.500" color="white">
            Me
          </Button>
          <Button bg="red.500" color="white">
            My Projects
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
