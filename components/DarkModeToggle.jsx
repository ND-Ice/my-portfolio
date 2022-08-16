import { useColorModeValue, useColorMode, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const { toggleColorMode } = useColorMode();
  return (
    <Icon
      onClick={toggleColorMode}
      cursor="pointer"
      color={useColorModeValue("purple", "orange")}
      as={useColorModeValue(FaMoon, FaSun)}
      _hover={{ bg: undefined }}
      _active={{ bg: undefined }}
    />
  );
}
