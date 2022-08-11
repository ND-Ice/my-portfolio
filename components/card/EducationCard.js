import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function EducationCard({
  schoolYear,
  schoolName,
  schoolLocation,
}) {
  return (
    <Box mt={5}>
      <Heading
        fontWeight="extrabold"
        letterSpacing={1}
        size="md"
        color={useColorModeValue("dark", "light")}
      >
        {schoolYear}
      </Heading>
      <Text
        fontSize="xl"
        color={useColorModeValue("dark", "light")}
        letterSpacing={1}
      >
        {schoolName}
      </Text>
      <Text
        textTransform="uppercase"
        fontSize="md"
        color={useColorModeValue("dark", "gray")}
        letterSpacing={1}
      >
        {schoolLocation}
      </Text>
    </Box>
  );
}

EducationCard.propTypes = {
  schoolYear: PropTypes.string,
  schoolName: PropTypes.string,
  schoolLocation: PropTypes.string,
};
