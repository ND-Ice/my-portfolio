import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";

export default function TechStackCard({ logo }) {
  return (
    <Box
      display="grid"
      placeItems="center"
      w="70px"
      bg="light"
      minH="70px"
      borderRadius={5}
    >
      {logo && (
        <Image
          src={logo}
          width={50}
          height={50}
          objectFit="contain"
          alt="logo"
        />
      )}
    </Box>
  );
}

TechStackCard.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};
