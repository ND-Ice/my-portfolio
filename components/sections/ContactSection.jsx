import { Box, Text, Flex, Button, Divider } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import LinkWrapper from "@components/LinkWrapper";
import { BigHeading, SecondaryHeading } from "@components/Headings";

export default function ContactSection() {
  return (
    <Box id="contact" mt={20} px={5} py={10} pb={20}>
      <Box maxW="500px" m="auto" textAlign="center">
        <BigHeading>My Contact</BigHeading>
        <Text mt={5} fontSize={["lg", "2xl"]}>
          Wanna get in touch?
        </Text>
        <Box w="full" mt={10}>
          <SecondaryHeading>Email Address</SecondaryHeading>
          <Contact>delacruzjoshua691@gmail.com</Contact>
          <Contact>delacruz.joshua.dev@gmail.com</Contact>

          <Divider my={5} />

          <SecondaryHeading>Contact Number</SecondaryHeading>
          <Contact>+63 966 204 8118</Contact>

          <Divider my={5} />

          <Flex gap={2} mt={5} justify="center" flexWrap="wrap">
            <LinkWrapper target="_blank">
              <Button leftIcon={<FaFacebook />}>Facebook</Button>
            </LinkWrapper>
            <LinkWrapper href="https://github.com/ND-Ice">
              <Button leftIcon={<FaGithub />}>Github</Button>
            </LinkWrapper>
            <LinkWrapper href="https://www.linkedin.com/in/joshua-dela-cruz-6921a2158/">
              <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
            </LinkWrapper>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

function Contact({ children }) {
  return (
    <Text fontSize={["lg", "2xl"]} wordBreak="break-all" letterSpacing={1}>
      {children}
    </Text>
  );
}
