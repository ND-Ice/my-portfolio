import Image from "next/image";
import PropTypes from "prop-types";
import { Badge, Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ProjectCard({ project }) {
  const {
    id,
    projectImageBanner,
    projectTitle,
    projectDescription,
    toolsUsed,
  } = project;

  return (
    <Box p={5} borderRadius="md" h="max-content">
      {projectImageBanner && (
        <Box
          w="full"
          pos="relative"
          h="200px"
          mb={5}
          borderRadius={5}
          overflow="hidden"
        >
          <Image
            src={projectImageBanner}
            objectFit="cover"
            layout="fill"
            alt="Project Banner"
          />
        </Box>
      )}
      <Heading size="md" color="light" mb={5}>
        {projectTitle}
      </Heading>
      <Text color="gray" textAlign="justify">
        {projectDescription}
      </Text>
      <Flex gap={2} mt={5} flexWrap="wrap">
        {toolsUsed &&
          toolsUsed.map((tool, index) => (
            <Badge
              textTransform="initial"
              variant="outline"
              colorScheme="green"
              key={index}
            >
              {tool}
            </Badge>
          ))}
      </Flex>
      <Flex justify="flex-end" mt={5}>
        <NextLink href={`/projects/${id}`}>
          <Button variant="link" color="accent.base">
            More &rarr;
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}

ProjectCard.propTypes = {
  projectTitle: PropTypes.string,
  projectImage: PropTypes.string,
  projectDescription: PropTypes.string,
  toolsUsed: PropTypes.array,
};
