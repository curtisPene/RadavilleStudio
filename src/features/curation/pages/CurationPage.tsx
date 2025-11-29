import { PageWrapper } from "@/components/PageWrapper";
import { CurationCarousel } from "../components/CurationCarousel";
import { CurationHeader } from "../components/CurationHeader";

export const CurationPage = () => {
  return (
    <PageWrapper data-curation-page className="bg-curation-bg min-h-screen">
      <CurationCarousel />
      <CurationHeader />
    </PageWrapper>
  );
};
