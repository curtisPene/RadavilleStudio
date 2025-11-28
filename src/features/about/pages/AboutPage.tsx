import { PageWrapper } from "@/components/PageWrapper";
import { AboutHero } from "../components/AboutHero";
import { AboutGallery } from "../components/AboutGallery";
import { AboutServices } from "../components/AboutServices";

export const AboutPage = () => {
  return (
    <PageWrapper data-about-page className="bg-about-">
      <AboutHero />
      <AboutGallery />
      <AboutServices />
    </PageWrapper>
  );
};
