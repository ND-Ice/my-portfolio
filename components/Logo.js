import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box>
      <Heading
        size="md"
        textTransform="uppercase"
        letterSpacing={1}
        color={useColorModeValue("dark", "light")}
      >
        Joshua
      </Heading>
      <Text
        fontSize="sm"
        letterSpacing={1}
        textTransform="uppercase"
        display={{ base: "none", md: "inline-block" }}
        color={useColorModeValue("dark", "light")}
      >
        Front End Developer
      </Text>
    </Box>
  );
}
