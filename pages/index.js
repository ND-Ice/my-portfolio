import Layout from "@components/layouts/Layout";
import {
  HomeSection,
  ProfileSection,
  ProjectSection,
  ContactSection,
} from "@components/sections";

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <ProfileSection />
      <ProjectSection />
      <ContactSection />
    </Layout>
  );
}
