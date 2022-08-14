import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box cursor="pointer" onClick={handleScrollToTop} role="group">
      <Heading
        size="sm"
        textTransform="uppercase"
        letterSpacing={1}
        lineHeight={0.5}
        color={useColorModeValue("dark", "light")}
        transition="all 300ms ease"
        _groupHover={{ color: "accent.base" }}
      >
        code with
        <Text
          as="span"
          color="accent.base"
          transition="all 300ms ease"
          _groupHover={{ color: useColorModeValue("dark", "light") }}
        >
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
