import { Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";

import ProjectDetailsLayout from "../../components/layouts/ProjectDetailsLayout";
import projects from "../../data/projects.json";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === parseInt(id)),
    [id]
  );

  return (
    <ProjectDetailsLayout title={selectedProject?.projectTitle}>
      <Heading>{selectedProject?.projectTitle}</Heading>
      <Text fontSize="xl" color="gray" letterSpacing={1}>
        {selectedProject?.projectDescription}
      </Text>
    </ProjectDetailsLayout>
  );
}
