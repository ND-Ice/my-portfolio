import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      size="lg"
      color={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<FaMoon />, <FaSun />)}
      _hover={{ bg: undefined }}
      _active={{ bg: undefined }}
    />
  );
}
