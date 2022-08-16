import Image from "next/image";
import { Box, Button, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import ProjectDetailsLayout from "@components/layouts/ProjectDetailsLayout";
import projects from "@data/projects.json";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === parseInt(id)),
    [id]
  );

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
