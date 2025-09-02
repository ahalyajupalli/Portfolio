"use client";
import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "40",
    postfix: '+'
  },
  {
    prefix: '~',
    metric: "Hours",
    value: "1000",
  },
  {
    metric: "Awards",
    value: "4",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <div className="text-white text-4xl font-bold flex items-baseline">
                {achievement.prefix && <span>{achievement.prefix}</span>}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix && <span>{achievement.postfix}</span>}
              </div>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;