interface InfoItemProps {
  number: string;
  title: string;
  items: string[];
}

const InfoItem = ({ number, title, items }: InfoItemProps) => {
  return (
    <div data-info-item className="pb-4">
      <div
        data-info-header
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
  return (
    <div
      data-info-info
      data-animate-info
      className="flex flex-col flex-1 items-end gap-2 pt-(--spacing-xl) pb-4"
    >
      <InfoItem
        number="01"
        title="Services"
        items={["Interior Design", "Art Direction", "Branding"]}
      />
      <InfoItem
        number="02"
        title="Location"
        items={[
          "Radaville Studio GmbH Scheibenstraße 45 40479 Düsseldorf Germany",
        ]}
      />
      <InfoItem number="03" title="Follow" items={["Instagram", "Spotify"]} />
    </div>
  );
};
