import { type FC } from "react";

export const Skills: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-medium uppercase text-white">Skills</h3>
      <div className="ml-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <ul className="list-disc">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass / SCSS</li>
        </ul>
        <ul className="list-disc">
          <li>GraphQL</li>
          <li>REST APIs</li>
          <li>Redux</li>
          <li>Context API</li>
          <li>SQL</li>
          <li>Node.js</li>
          <li>Refine</li>
          <li>Radix UI</li>
        </ul>
        <ul className="list-disc">
          <li>Storybook</li>
          <li>Figma</li>
          <li>Playwright</li>
          <li>Vitest</li>
          <li>TDD</li>
          <li>Code Reviews</li>
          <li>Pair Programming</li>
          <li>Responsive Design</li>
        </ul>
        <ul className="list-disc">
          <li>Git / GitHub</li>
          <li>CircleCI</li>
          <li>Honeycomb</li>
          <li>LaunchDarkly</li>
          <li>Stoplight</li>
          <li>Amazon Kiro</li>
          <li>Agile Development</li>
          <li>Cross-functional Collaboration</li>
        </ul>
      </div>
    </div>
  );
};
