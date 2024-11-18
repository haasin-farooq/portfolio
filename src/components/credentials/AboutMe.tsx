import { type FC } from "react";

export const AboutMe: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-medium uppercase text-white">About me</h3>
      <div className="flex flex-col gap-4">
        <p className="text-gray-extra-light">
          I&apos;m a Frontend Developer based in Finland with expertise in
          ReactJS, Next.js, TypeScript, JavaScript. I have 4+ years of
          professional experience, and have led impactful projects and mentored
          teams at companies like Leland and Tintash. Currently, I&apos;m
          working at Gubbe, a Finnish startup revolutionizing elderly care by
          creating the best matchmaking platform for homes and nursing
          facilities in Finland and Sweden.
        </p>
        <p className="text-gray-extra-light">
          I&apos;m also pursuing a Master&apos;s in Software Product Management
          & Business at LUT University, enhancing my skills at the intersection
          of technology and business.
        </p>
      </div>
    </div>
  );
};
