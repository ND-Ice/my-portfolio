import Layout from "../components/layouts/Layout";
import HomeSection from "../components/sections/HomeSection";
import ProfileSection from "../components/sections/ProfileSection";
import ProjectSection from "../components/sections/ProjectSection";

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <ProfileSection />
      <ProjectSection />
    </Layout>
  );
}
