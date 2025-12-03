import { useRef } from "react";

interface InfoItemProps {
  number: string;
  title: string;
  items: string[];
}

const infoItems: InfoItemProps[] = [
  {
    number: "01",
    title: "Services",
    items: [
      "Product Design",
      "User Experience",
      "Visual Design",
      "Web Development",
    ],
  },
  {
    number: "02",
    title: "Location",
    items: ["Radaville Studio GmbH Scheibenstraße 45 40479 Düsseldorf Germany"],
  },
  {
    number: "03",
    title: "Follow",
    items: ["Instagram", "Spotify"],
  },
];

const InfoItem = ({ number, title, items }: InfoItemProps) => {
  return (
    <div data-info-item className="pb-4">
      <div
        data-info-header
        data-animate-info-header
        className="flex flex-row justify-end gap-[8px] pb-[4px]"
      >
        <span className="text-white text-[10px] opacity-50">{number}</span>
        <span className="text-white text-[10px]">{title}</span>
      </div>
      <div
        data-info-list
        data-animate-info-list
        className="flex flex-col gap-0.5 items-end"
      >
        {items.map((item, index) => (
          <span key={index} className="text-white text-[10px] text-right">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export const InfoSection = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={pageRef}
      data-info-info
      data-animate-info
      className="flex flex-col flex-1 items-end gap-2 pt-(--spacing-xl) pb-4 "
    >
      {infoItems.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};
