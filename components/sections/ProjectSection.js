import { Box, Heading } from "@chakra-ui/react";

import projects from "../../data/projects.json";
import ProjectCard from "../card/ProjectCard";

export default function ProjectSection() {
  return (
    <Box minH="100vh" mt={20} id="projects">
      <Box maxW="900px" m="auto">
        <Heading
          fontWeight="extrabold"
          textAlign="center"
          size="2xl"
          color="accent.base"
          letterSpacing={1}
        >
          MY PROJECTS
        </Heading>

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
