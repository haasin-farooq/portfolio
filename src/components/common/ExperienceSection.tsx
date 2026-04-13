import { type FC } from "react";

import { InfoCard } from "../InfoCard";

interface ExperienceSectionProps {
  isCard?: boolean;
  highlightPosition?: boolean;
  withDescription?: boolean;
  className?: string;
  titleClassName?: string;
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  isCard,
  highlightPosition,
  withDescription,
  className,
  titleClassName,
}) => {
  const CONTENT = (
    <>
      <h1 className={`text-xl font-medium text-white ${titleClassName}`}>
        Experience
      </h1>
      <div className="flex flex-col gap-8">
        <Experience
          period="Jan 2025 - Present"
          position="Software Engineer"
          company="RB Global (Ritchie Bros.)"
          location="Helsinki, Finland · Hybrid"
          description={
            withDescription
              ? "At RB Global, I build buyer-facing product features across checkout, payments, invoices, account settings, and transportation flows in a large-scale marketplace environment. My work includes improving checkout and invoice experiences, integrating frontend features with backend services and APIs, maintaining strong test coverage through unit, integration, and contract tests, and using pair programming and pull request reviews to support code quality. I also work with observability tooling like Honeycomb to monitor production behavior and improve issue detection."
              : null
          }
          highlightPosition={highlightPosition}
        />

        <Experience
          period="Mar 2024 - Dec 2024"
          position="Frontend Developer"
          company="Gubbe"
          location="Helsinki, Finland · Hybrid"
          description={
            withDescription
              ? "At Gubbe, I rebuilt the Staff app from scratch using React, Next.js, and TypeScript, creating a more scalable and maintainable frontend foundation. I also contributed significantly to redeveloping the Gubbe Admin app using Refine, Tailwind CSS, and Radix UI, while building new frontend features, creating prototypes in Figma, and strengthening product quality through Playwright testing and code reviews."
              : null
          }
          highlightPosition={highlightPosition}
        />

        <Experience
          period="Jul 2021 - Feb 2024"
          position="Frontend Engineer"
          company="Leland"
          location="United States · Remote"
          description={
            withDescription
              ? "At Leland, I contributed to the frontend development of an online coaching platform using React, Next.js, TypeScript, GraphQL, and Tailwind CSS. I worked across multiple repositories, improved code modularity through Storybook and isolated component development, refactored legacy frontend code into reusable components, and built responsive, data-driven features that supported the platform during a high-growth phase."
              : null
          }
          highlightPosition={highlightPosition}
        />

        <Experience
          period="Sep 2020 - Feb 2024"
          position="Software Engineer"
          company="Tintash"
          location="Lahore, Pakistan · Hybrid"
          description={
            withDescription
              ? "At Tintash, I worked on frontend-focused projects including Kooledge, an e-learning platform built with React and SCSS. I also mentored junior engineers through code reviews and technical guidance, supported hiring through coding assessments, and contributed to project estimation and feature improvement discussions."
              : null
          }
          highlightPosition={highlightPosition}
        />

        <Experience
          period="Jun 2019 - Aug 2019"
          position="Software Developer Intern"
          company="Techlogix"
          location="Lahore, Pakistan · On-site"
          highlightPosition={highlightPosition}
        />

        <Experience
          period="Jul 2018 - Sep 2018"
          position="Android Developer Intern"
          company="Vanilla Arcade (Pvt) Ltd"
          location="Lahore, Pakistan · On-site"
          highlightPosition={highlightPosition}
        />
      </div>
    </>
  );

  return isCard ? (
    <InfoCard className={`flex flex-col gap-6 p-8 ${className}`}>
      {CONTENT}
    </InfoCard>
  ) : (
    <div className={`flex flex-col gap-6 ${className}`}>{CONTENT}</div>
  );
};

interface ExperienceProps {
  period: string;
  position: string;
  company: string;
  location?: string;
  description?: string | null;
  highlightPosition?: boolean;
}

const Experience: FC<ExperienceProps> = ({
  period,
  position,
  company,
  location,
  description,
  highlightPosition,
}) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <p className="text-sm text-gray-light">{period}</p>
      <h3
        className={`font-medium ${
          highlightPosition ? "text-cyan-300" : "text-white"
        }`}
      >
        {position}
      </h3>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <p className="text-gray-light">{company}</p>
        {location ? (
          <p className="text-xs text-gray-light">{location}</p>
        ) : null}
      </div>
      {description ? <p className="mt-2">{description}</p> : null}
    </div>
  );
};
