import { Box, Heading, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Box>
      <Heading
        size="md"
        textTransform="uppercase"
        letterSpacing={1}
        color="light"
      >
        dlc
      </Heading>
      <Text
        fontSize="sm"
        letterSpacing={1}
        textTransform="uppercase"
        color="light"
      >
        Front End Developer
      </Text>
    </Box>
  );
}
