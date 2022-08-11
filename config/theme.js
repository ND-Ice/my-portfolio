import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "dark",
    },
  },
};

const fonts = {
  heading: `'M PLUS Rounded 1c', sans-serif`,
};

const colors = {
  dark: "#171717",
  light: "#f8fafc",
  accent: { base: "#ef4444", lighter: "#f87171", darker: "#dc2626" },
};

const theme = extendTheme({ styles, fonts, colors });

export default theme;
