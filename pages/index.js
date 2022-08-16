import Layout from "@components/layouts/Layout";
import {
  HomeSection,
  ProfileSection,
  ProjectSection,
  ContactSection,
} from "@components/sections";

export default function Home({ techStacks, projects }) {
  return (
    <Layout>
      <HomeSection />
      <ProfileSection techStacks={techStacks} />
      <ProjectSection projects={projects} />
      <ContactSection />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const techStacks = (await import("@data/techStack.json")).default;
  const projects = (await import("@data/projects.json")).default;

  return { props: { techStacks, projects } };
};
