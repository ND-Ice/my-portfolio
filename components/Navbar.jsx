import { FaFacebook, FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "@components/Logo";
import DarkModeToggle from "@components/DarkModeToggle";
import Navlink from "@components/Navlink";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      pos="sticky"
      top={0}
      alignItems="center"
      h="10vh"
      backdropFilter="blur(10px)"
      zIndex={1000}
      shadow="sm"
      px={5}
    >
      <Flex
        w="full"
        maxW="900px"
        m="auto"
        align="center"
        justify="space-between"
      >
        <Logo />
        <Flex gap={5} display={{ base: "none", md: "flex" }}>
          <Navlink to="about">About</Navlink>
          <Navlink to="projects">Projects</Navlink>
          <Navlink to="contact">Contact</Navlink>
        </Flex>
        <Flex gap={5} align="center">
          <Flex gap={5} display={{ base: "none", md: "flex" }}>
            <LinkWrapper href="https://www.facebook.com/profile.php?id=100029689120875">
              <Icon cursor="pointer" as={FaFacebook} />
            </LinkWrapper>

            <LinkWrapper href="https://www.linkedin.com/in/joshua-dela-cruz-6921a2158/">
              <Icon cursor="pointer" as={FaLinkedin} />
            </LinkWrapper>

            <LinkWrapper href="https://github.com/ND-Ice">
              <Icon cursor="pointer" as={FaGithub} />
            </LinkWrapper>
          </Flex>

          <DarkModeToggle />

          <Box display={{ md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaBars />}
                variant="outline"
              />
              <MenuList bg={useColorModeValue("light", "dark")}>
                <Navlink to="about">
                  <MenuItem>About</MenuItem>
                </Navlink>
                <Navlink to="projects">
                  <MenuItem>Projects</MenuItem>
                </Navlink>
                <Navlink to="contact">
                  <MenuItem>Contact</MenuItem>
                </Navlink>
                <MenuDivider />
                <LinkWrapper href="https://www.facebook.com/profile.php?id=100029689120875">
                  <MenuItem icon={<FaFacebook />}>Facebook</MenuItem>
                </LinkWrapper>
                <LinkWrapper href="https://github.com/ND-Ice">
                  <MenuItem icon={<FaGithub />}>Github</MenuItem>
                </LinkWrapper>
                <LinkWrapper href="https://www.linkedin.com/in/joshua-dela-cruz-6921a2158/">
                  <MenuItem icon={<FaLinkedin />}>LinkedIn</MenuItem>
                </LinkWrapper>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

function LinkWrapper({ href, children }) {
  return (
    <Link href={href} target="_blank" lineHeight={0}>
      {children}
    </Link>
  );
}
