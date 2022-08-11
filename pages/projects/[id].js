import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";

import projects from "../../data/projects.json";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === parseInt(id)),
    [id]
  );

  return (
    <Box color="light" py={10} maxW="900px" m="auto">
      <Heading>{selectedProject?.projectTitle}</Heading>
      <Text>{selectedProject?.projectDescription}</Text>
    </Box>
  );
}
