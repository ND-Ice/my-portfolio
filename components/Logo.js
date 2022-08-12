import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box>
      <Heading
        size="sm"
        textTransform="uppercase"
        letterSpacing={1}
        lineHeight={0.5}
        color={useColorModeValue("dark", "light")}
      >
        code with
        <Text as="span" color="accent.base">
          {" "}
          josh
        </Text>
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
