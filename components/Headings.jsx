import { Heading } from "@chakra-ui/react";

export function BigHeading({ children, ...otherProps }) {
  return (
    <Heading
      fontWeight="extrabold"
      size="2xl"
      letterSpacing={1}
      color="accent.base"
      textAlign="center"
      textTransform="uppercase"
      mb={5}
      {...otherProps}
    >
      {children}
    </Heading>
  );
}

export function SecondaryHeading({ children, ...otherProps }) {
  return (
    <Heading
      size="lg"
      mb={5}
      textTransform="uppercase"
      color="accent.base"
      textAlign="center"
      {...otherProps}
    >
      {children}
    </Heading>
  );
}
