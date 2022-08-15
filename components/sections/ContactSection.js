import { Box, Heading, Text, Flex, Button, Divider } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <Box id="contact" mt={20} px={5} py={10} pb={20}>
      <Box maxW="500px" m="auto" textAlign="center">
        <Heading
          size="2xl"
          fontWeight="extrabold"
          textTransform="uppercase"
          color="accent.base"
        >
          My Contact
        </Heading>
        <Text mt={5} fontSize="2xl">
          Wanna get in touch?
        </Text>
        <Box w="full" mt={10}>
          <Heading
            letterSpacing={1}
            size="lg"
            mb={5}
            textTransform="uppercase"
            color="accent.base"
          >
            Email Address
          </Heading>
          <Text fontSize="2xl" letterSpacing={1} wordBreak="break-all">
            delacruzjoshua691@gmail.com
          </Text>
          <Text fontSize="2xl" letterSpacing={1} wordBreak="break-all">
            delacruz.joshua.bscs@gmail.com
          </Text>
          <Divider my={5} />

          <Heading
            letterSpacing={1}
            size="lg"
            mb={5}
            mt={10}
            textTransform="uppercase"
            color="accent.base"
          >
            Contact Number
          </Heading>
          <Text textTransform="uppercase" fontSize="2xl">
            +63 966 204 8118
          </Text>

          <Divider my={5} />

          <Flex gap={2} mt={5} justify="center" flexWrap="wrap">
            <Button leftIcon={<FaFacebook />}>Facebook</Button>
            <Button leftIcon={<FaGithub />}>Github</Button>
            <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
