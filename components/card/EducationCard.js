import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function EducationCard({
  schoolYear,
  schoolName,
  schoolLocation,
}) {
  return (
    <Box mt={5}>
      <Heading fontWeight="extrabold" letterSpacing={1} size="md" color="light">
        {schoolYear}
      </Heading>
      <Text fontSize="xl" color="light" letterSpacing={1}>
        {schoolName}
      </Text>
      <Text
        textTransform="uppercase"
        fontSize="md"
        color="gray"
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
