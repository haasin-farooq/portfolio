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
          period="Mar 2024 - Present"
          position="Frontend Developer"
          company="Gubbe"
          location="Helsinki, Finland · Hybrid"
          description={
            withDescription
              ? "As a Frontend Developer at Gubbe, I lead the development of a matchmaking platform revolutionizing elderly care across Finland and Sweden. By utilizing a modern tech stack—Next.js, TypeScript, and Tailwind CSS—I’ve significantly improved the user interface and experience. My role involves implementing new features, conducting end-to-end tests using Playwright, and ensuring high coding standards through regular code reviews, driving both innovation and scalability."
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
              ? "At Leland, I played a key role in building an online coaching platform using Next.js, TypeScript, and GraphQL. By refactoring components and optimizing the UI, I contributed to a 10x increase in live coaching sessions and a 4x boost in signups. My work included integrating communication tools like Sendbird and Whereby, enhancing user engagement and platform efficiency, while ensuring responsive design with Tailwind CSS."
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
              ? "During my time at Tintash, I led frontend projects, including the development of Ferrum Health's website on Webflow and an e-learning platform, Kooledge, using ReactJS. I mentored junior engineers, conducted code reviews, and improved project estimations, leading to increased productivity and timely project deliveries. Additionally, my contributions enhanced the quality of new hires and aligned project outcomes with industry best practices."
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
        className={`font-medium ${highlightPosition ? "text-cyan-300" : "text-white"}`}
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
