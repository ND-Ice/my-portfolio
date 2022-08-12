import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: mode("light", "dark"),
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `'M PLUS Rounded 1c', sans-serif`,
};

const colors = {
  dark: "#171717",
  light: "#f9fafb",
  accent: { base: "#ef4444", lighter: "#f87171", darker: "#dc2626" },
};

const theme = extendTheme({ config, styles, fonts, colors });

export default theme;
