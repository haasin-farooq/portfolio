import { type FC } from "react";

export const Skills: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-medium uppercase text-white">Skills</h3>
      <div className="ml-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <ul className="list-disc">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul className="list-disc">
          <li>GraphQL</li>
          <li>Context API</li>
          <li>Playwright</li>
          <li>Refine Dev</li>
          <li>HTML</li>
        </ul>
        <ul className="list-disc">
          <li>CSS/Scss</li>
          <li>Radix UI</li>
          <li>Storybook</li>
          <li>Webflow</li>
          <li>Figma</li>
        </ul>
        <ul className="list-disc">
          <li>Git/GitHub</li>
          <li>Agile Principles</li>
          <li>REST API</li>
          <li>Slack</li>
          <li>Linear / Jira</li>
        </ul>
      </div>
    </div>
  );
};
