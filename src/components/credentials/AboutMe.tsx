import { type FC } from "react";

export const AboutMe: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-medium uppercase text-white">About me</h3>
      <div className="flex flex-col gap-4">
        <p className="text-gray-extra-light">
          I&apos;m a Software Engineer with 5+ years of professional experience
          specializing in front-end development using ReactJS, Next.js,
          TypeScript, JavaScript, and Tailwind CSS. I combine technical
          expertise with creative problem-solving to deliver scalable,
          user-friendly, and impactful solutions.
        </p>
        <p className="text-gray-extra-light">
          For the past 1.5 years, I&apos;ve been part of the Buyer Experience
          team at RB Global. I work on building and enhancing features for
          payment, invoice generation, account settings, and the overall
          checkout flow, ensuring a seamless buying experience for customers
          across global marketplaces. My role involves close collaboration with
          back-end, QA, and product teams to deliver reliable and
          high-performance features.
        </p>
        <p className="text-gray-extra-light">
          Previously, I worked at Gubbe, a Finnish startup transforming elderly
          care with a matchmaking platform that connects helpers with families
          in need. Before that, I worked at Tintash and Leland, where I led
          projects, mentored teammates, and delivered high-quality front-end
          solutions.
        </p>
        <p className="text-gray-extra-light">
          Alongside my work, I&apos;m pursuing a Master&apos;s degree in
          Software Product Management & Business at LUT University in Finland.
          This program is helping me deepen my understanding of how technology
          and business intersect to solve real-world problems.
        </p>
        <p className="text-gray-extra-light">
          I&apos;m always open to connecting with others who are passionate
          about technology, product development, and building solutions that
          make a difference.
        </p>
      </div>
    </div>
  );
};
