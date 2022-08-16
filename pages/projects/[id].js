import Image from "next/image";
import { Box, Button, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import ProjectDetailsLayout from "@components/layouts/ProjectDetailsLayout";

export default function ProjectDetails({ selectedProject }) {
  return (
    <ProjectDetailsLayout title={selectedProject?.projectTitle}>
      <Box minH="100vh">
        <Heading>{selectedProject?.projectTitle}</Heading>
        <Text fontSize="xl" color="gray" letterSpacing={1}>
          {selectedProject?.projectDescription}
        </Text>
        <Flex gap={5} mt={5}>
          <Link target="_blank" href={selectedProject?.["github-link"]}>
            <Button rightIcon={<FaGithub />}>View on Github</Button>
          </Link>
          <Link target="_blank" href={selectedProject?.["live-link"]}>
            <Button
              disabled={!selectedProject?.["live-link"]}
              rightIcon={<FaGlobe />}
            >
              View Live
            </Button>
          </Link>
        </Flex>
        {selectedProject?.projectImages?.length > 0 && (
          <Box>
            <Heading size="lg" mt={10} mb={5}>
              Photos
            </Heading>
            <Box
              display="grid"
              gap={5}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            >
              {selectedProject?.projectImages?.map((image, index) => (
                <Box
                  key={index}
                  pos="relative"
                  w="full"
                  h={250}
                  borderWidth={2}
                  borderRadius={5}
                >
                  <Image
                    src={image}
                    objectFit="contain"
                    alt="Project Photos"
                    layout="fill"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </ProjectDetailsLayout>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const projects = (await import("@data/projects.json")).default;
  const selectedProject = projects.find(
    (project) => project.id === parseInt(id)
  );

  return { props: { selectedProject } };
};

export const getStaticPaths = async () => {
  const projects = (await import("@data/projects.json")).default;
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
