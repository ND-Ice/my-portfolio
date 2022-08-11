import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

export default function HomeSection() {
  return (
    <Box
      p={10}
      display="grid"
      placeItems="center"
      minH="600px"
      bg="blackAlpha.300"
    >
      <Box textAlign="center">
        <Heading fontSize="6xl" textTransform="uppercase" color="white">
          Joshua Dela Cruz
        </Heading>
        <Text fontSize="2xl" color="light">
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
