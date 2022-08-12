import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

import EducationCard from "../card/EducationCard";
import techStacks from "../../data/techStack.json";
import TechStackCard from "../card/TechStackCard";

export default function ProfileSection() {
  return (
    <Box py={10} px={5}>
      <Box maxW={{ md: "900px" }} m="auto">
        <Heading
          fontWeight="extrabold"
          size="2xl"
          letterSpacing={1}
          color="accent.base"
          textAlign="center"
          mb={5}
        >
          MY PROFILE
        </Heading>
        <Text
          fontSize="2xl"
          textAlign={{ base: "center", md: "justify" }}
          color={useColorModeValue("dark", "light")}
        >
          Hi, I am
          <Text textTransform="uppercase" as="span" color="accent.base">
            {" "}
            Joshua Dela Cruz{" "}
          </Text>
          an Incoming professional seeking an opportunity to use my background
          in
          <Text as="span" textTransform="uppercase" color="accent.base">
            {" "}
            Front-end engineering{" "}
          </Text>
          and
          <Text as="span" textTransform="uppercase" color="accent.base">
            {" "}
            Software Development.{" "}
          </Text>
          I am a dedicated and detail-oriented programmer looking for an
          opportunity to expand my skill set and grow my career as software
          engineer.
        </Text>

        <Flex direction={{ base: "column", md: "row" }} gap={20} mt={10}>
          <Box>
            <Heading
              fontWeight="extrabold"
              textAlign="center"
              size="lg"
              letterSpacing={1}
              color="accent.base"
              mb={10}
            >
              MY EDUCATION
            </Heading>
            <EducationCard
              schoolYear="2018-2022"
              schoolName='Eulogio "Amang" Rodriguez Institute of Science and Technology'
              schoolLocation="Manila"
            />
            <EducationCard
              schoolYear="2016-2018"
              schoolName="Polytechnic University of the Philippines"
              schoolLocation="Manila"
            />
            <EducationCard
              schoolYear="2012-2016"
              schoolName="Ligaya National High School"
              schoolLocation="Gabaldon"
            />
          </Box>
          <Box>
            <Heading
              fontWeight="extrabold"
              size="lg"
              letterSpacing={1}
              color="accent.base"
              textAlign="center"
              mb={10}
            >
              MY TOOLS
            </Heading>
            <Box
              gap={2}
              display="grid"
              justifyItems="center"
              gridTemplateColumns={{
                base: "repeat(4,1fr)",
                md: "repeat(5,1fr)",
              }}
            >
              {techStacks.map((stack) => (
                <TechStackCard
                  key={stack.id}
                  title={stack.title}
                  logo={stack.logo}
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
