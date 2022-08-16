import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

// import techStacks from "@data/techStack.json";
import { EducationCard, TechStackCard } from "@components/cards";
import { BigHeading, SecondaryHeading } from "@components/Headings";

export default function ProfileSection({ techStacks }) {
  return (
    <Box mt={20} id="about" px={5}>
      <Box maxW={{ md: "900px" }} m="auto">
        <BigHeading>MY PROFILE</BigHeading>
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

        <Flex direction={{ base: "column", lg: "row" }} gap={20} mt={10}>
          <Box>
            <SecondaryHeading>MY EDUCATION</SecondaryHeading>
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
            <SecondaryHeading>MY TOOLS</SecondaryHeading>
            <Box
              gap={[2, 5]}
              display="grid"
              justifyItems="center"
              gridTemplateColumns={{
                base: "repeat(4,1fr)",
                sm: "repeat(5,1fr)",
                md: "repeat(9,1fr)",
                lg: "repeat(5,1fr)",
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
