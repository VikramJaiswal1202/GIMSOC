import React, { JSX } from "react";
import { IconType } from "react-icons";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiLinktree,
  SiYoutube,
  SiGmail,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

export default function Example(): JSX.Element {
  return (
    <div className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
}

type Side = "left" | "right" | "top" | "bottom";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

const ENTRANCE_KEYFRAMES: Record<Side, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<Side, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const ClipPathLinks: React.FC = () => {
  const items = [
    { Icon: SiLinktree, href: "https://linktr.ee/your-username" },
    { Icon: SiInstagram, href: "https://instagram.com/your-username" },
    { Icon: SiFacebook, href: "https://facebook.com/your-username" },
    { Icon: SiLinkedin, href: "https://linkedin.com/in/your-username" },
    { Icon: SiYoutube, href: "https://youtube.com/@your-channel" },
    { Icon: SiGmail, href: "mailto:your-email@gmail.com" },
  ];

  return (
    <div className="grid grid-cols-3 border border-neutral-900">
      {items.map((item, index) => {
        const isLastCol = (index + 1) % 3 === 0;
        const isLastRow = index >= 3;
        const borderClass = [
          !isLastCol && "border-r",
          !isLastRow && "border-b",
          "border-neutral-900",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <LinkBox
            key={index}
            Icon={item.Icon}
            href={item.href}
            borderClass={borderClass}
          />
        );
      })}
    </div>
  );
};

interface LinkBoxProps {
  Icon: IconType;
  href: string;
  borderClass?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, borderClass = "" }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>): Side => {
    const box = e.currentTarget.getBoundingClientRect();
    const sides: { proximity: number; side: Side }[] = [
      { proximity: Math.abs(box.left - e.clientX), side: "left" },
      { proximity: Math.abs(box.right - e.clientX), side: "right" },
      { proximity: Math.abs(box.top - e.clientY), side: "top" },
      { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
    ];
    return sides.sort((a, b) => a.proximity - b.proximity)[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative grid h-20 w-full place-content-center sm:h-28 md:h-36 ${borderClass}`}
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-gradient-to-br from-heading2 to-heading text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
