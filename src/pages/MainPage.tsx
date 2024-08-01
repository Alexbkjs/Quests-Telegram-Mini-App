import React from "react";
import Header from "../components/Header";
import { group_bogus } from "../images";

// Props for the small component
interface SmallComponentProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

// Small component for each item
const SmallComponent: React.FC<SmallComponentProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-2">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />{" "}
      {/* Adjust image size as needed */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
};

// Main page component
const MainPage: React.FC = () => {
  return (
    <div className=" max-w-xs mx-auto">
      <Header pageName="Main Page" /> {/* Example usage of Header component */}
      <div className="mt-4 grid grid-cols-2 gap-16">
        {/* First column with 3 SmallComponents */}
        <div>
          <SmallComponent
            imageSrc={group_bogus}
            title="Item 1"
            subtitle="Subtitle for Item 1"
          />
          <SmallComponent imageSrc={group_bogus} title="Item 2" />
          <SmallComponent
            imageSrc={group_bogus}
            title="Item 3"
            subtitle="Subtitle for Item 3"
          />
        </div>
        {/* Second column with 3 SmallComponents */}
        <div>
          <SmallComponent
            imageSrc={group_bogus}
            title="Item 4"
            subtitle="Subtitle for Item 4"
          />
          <SmallComponent imageSrc={group_bogus} title="Item 5" />
          <SmallComponent
            imageSrc={group_bogus}
            title="Item 6"
            subtitle="Subtitle for Item 6"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
