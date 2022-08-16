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

import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import Navlink from "./Navlink";

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
        align="center"
        justify="space-between"
        w="full"
        maxW="900px"
        m="auto"
      >
        <Logo />
        <Flex gap={5} display={{ base: "none", md: "flex" }}>
          <Navlink to="about">About</Navlink>
          <Navlink to="projects">Projects</Navlink>
          <Navlink to="contact">Contact</Navlink>
        </Flex>
        <Flex gap={5} align="center">
          <Flex gap={5} display={{ base: "none", md: "flex" }}>
            <Link
              target="_blank"
              lineHeight={0}
              href="https://www.facebook.com/profile.php?id=100029689120875"
            >
              <Icon cursor="pointer" as={FaFacebook} />
            </Link>

            <Link
              target="_blank"
              lineHeight={0}
              href="https://github.com/ND-Ice"
            >
              <Icon cursor="pointer" as={FaLinkedin} />
            </Link>

            <Link
              target="_blank"
              lineHeight={0}
              href="https://www.linkedin.com/in/joshua-dela-cruz-6921a2158/"
            >
              <Icon cursor="pointer" as={FaGithub} />
            </Link>
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
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100029689120875"
                >
                  <MenuItem icon={<FaFacebook />}>Facebook</MenuItem>
                </Link>
                <Link target="_blank" href="https://github.com/ND-Ice">
                  <MenuItem icon={<FaGithub />}>Github</MenuItem>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/joshua-dela-cruz-6921a2158/"
                >
                  <MenuItem icon={<FaLinkedin />}>LinkedIn</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
