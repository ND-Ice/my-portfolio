import { Box } from "@chakra-ui/react";

import projects from "@data/projects.json";
import ProjectCard from "@components/cards/ProjectCard";
import { BigHeading } from "@components/Headings";

export default function ProjectSection() {
  return (
    <Box minH="100vh" mt={20} id="projects" px={5}>
      <Box maxW="900px" m="auto">
        <BigHeading>MY PROJECTS</BigHeading>
        <Box
          display="grid"
          gridTemplateColumns={{ md: "repeat(2,1fr)" }}
          gap={10}
          mt={10}
        >
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
