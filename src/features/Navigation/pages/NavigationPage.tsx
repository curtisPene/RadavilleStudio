import { NavigationHeader } from "../components/NavigationHeader";
import { NavigationLinks } from "../components/NavigationLinks";
import { InfoSection } from "../components/InfoSection";
import { NavigationFooter } from "../components/NavigationFooter";

export const NavigationPage = () => {
  return (
    <div
      data-navigation-overlay
      data-animate-navigation-overlay
      className="fixed inset-0 bg-neutral-950 z-40 p-4 flex flex-col"
    >
      <NavigationHeader />
      <div data-navigation-content className="flex flex-row h-full">
        <NavigationLinks />
        <InfoSection />
      </div>
      <NavigationFooter />
    </div>
  );
};
