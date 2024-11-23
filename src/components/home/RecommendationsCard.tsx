"use client";

import {
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  QuoteIcon,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { type FC, useState } from "react";

import Benjamin from "../../assets/images/benjamin.jpeg";
import John from "../../assets/images/john.jpeg";
import Rodrigo from "../../assets/images/rodrigo.jpeg";
import Zando from "../../assets/images/zando.jpeg";
import { InfoCard } from "../InfoCard";

interface RecommendationsCardProps {
  className?: string;
}

export const RecommendationsCard: FC<RecommendationsCardProps> = ({
  className,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <InfoCard className={`p-8 ${className}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <QuoteIcon className="size-6 shrink-0" />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={
                index === 0
                  ? "text-gray-light"
                  : "text-gray-extra-light hover:text-white"
              }
              onClick={() => setIndex((prev) => prev - 1)}
              disabled={index === 0}
            >
              <ChevronLeftCircleIcon />
            </button>
            <button
              type="button"
              className={
                index === 3
                  ? "text-gray-light"
                  : "text-gray-extra-light hover:text-white"
              }
              onClick={() => setIndex((prev) => prev + 1)}
              disabled={index === 3}
            >
              <ChevronRightCircleIcon />
            </button>
          </div>
        </div>
        {index === 0 ? (
          <Recommendation
            name="Zando Ward"
            title="Co-Founder, Head of Engineering at Leland"
            image={Zando}
            recommendation="Working with Haasin is a joy. He is a skilled frontend engineer with a passion and dedication for his work. Our timezones were nearly 12 hours apart, but he was great about being flexible with meeting times in order to accommodate the rest of the team. It wasn't uncommon that we'd send something his way at the end of our working day and wake up to a full set of PRs and features built. He's a great collaborator and keeps the user's perspective in mind when offering feedback and suggestions on product development. I'd recommend Haasin without hesitation — he'd be a valuable asset to any organization."
          />
        ) : index === 1 ? (
          <Recommendation
            name="John Koelliker"
            title="CEO @ Leland | Forbes 30 Under 30"
            image={John}
            recommendation="Haasin has been such an incredible front-end contributor on our engineering team. He learns incredibly quickly, moves fast, communicates well, and has a bias towards action. I've also been impressed with his ability to be product-minded and think about the user's needs. He often brings ideas to the table of how we could make the product better, which shows how much he cares about quality and our business goals. Lastly, his calm demeanor makes him a pleasure to work with and enables him to build relationships quickly. Can't recommend him highly enough."
          />
        ) : index === 2 ? (
          <Recommendation
            name="Rodrigo Belo"
            title="Professor of Information Systems, Nova School of Business and Economics"
            image={Rodrigo}
            recommendation="Haasin was the main developer of an education platform in ReactJS. Development was fast, communication always clear, and we were able to quickly come up with solutions for unforeseen edge cases. I have no reservations in recommending Haasin."
          />
        ) : index === 3 ? (
          <Recommendation
            name="Benjamin Nguyen, MD"
            title="Lead Product Manager, TranscarentProduct"
            image={Benjamin}
            recommendation="Haasin helped us build out our company's website on Webflow. From start to finish, Haasin was responsive, skillful, and stayed within our budget. He was also very communicative, and enabled us to clear up any misunderstandings immediately. We couldn't be happier with the resulting website!"
          />
        ) : null}
      </div>
    </InfoCard>
  );
};

interface RecommendationProps {
  recommendation: string;
  name: string;
  title: string;
  image: StaticImageData;
}

const Recommendation: FC<RecommendationProps> = ({
  recommendation,
  name,
  title,
  image,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="italic text-gray-extra-light">{recommendation}</p>
      <div className="flex items-center gap-4">
        <div className="size-12 shrink-0">
          <Image
            className="rounded-full"
            src={image}
            placeholder="blur"
            alt="recommender image"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p>{name}</p>
          <p className="text-sm text-gray-light">{title}</p>
        </div>
      </div>
    </div>
  );
};
