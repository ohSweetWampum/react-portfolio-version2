import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/italicFont.css";

const circleLogo = process.env.PUBLIC_URL + "/images/UCBCircleLogo.png";

const heroPageNavigation = [
  { name: "Reason For Release", href: "/reasonForRelease" },
  { name: "Executive Summary", href: "/executiveSummary" },
  { name: "Findings And Conclusions", href: "/findingsAndConclusions" },
];

export default function HeroPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-red-700 text-2xl animate-pulse">UNCLASSIFIED</h2>
        <h2>
          TOP SECRET REPORT ON OPERATIVE BY NAME OF{" "}
          <span className="text-decoration-black line-through decoration-8 hover:no-underline">
            {" "}
            Matthew Gibson{" "}
          </span>
          FROM THE{" "}
          <span className="text-decoration-black line-through decoration-8 hover:no-underline">
            {" "}
            UC-Berkeley{" "}
          </span>{" "}
          Program
        </h2>

        <h1 className="font-bold text-2xl">
          UC-Berkeley Select Committee on Intelligence
        </h1>
        <h1 className="italic">
          Committee Study of top secret operatives and their usefulness to
          private industry
        </h1>

        <img
          src={circleLogo}
          alt="UCB Circle Logo"
          style={{ transform: "scale(0.5)" }}
        />

        <div className="block ">
          {heroPageNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-base leading-6 text-black no-underline block"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <h4 className="italic text-sm">Approved June 12th, 2023</h4>
        <h4 className="italic">Updated July 3rd, 2023</h4>
        <h4 className="italic">Declassification Revisions July 3rd, 2023</h4>

        <h2 className="text-red-700 text-2xl animate-pulse">UNCLASSIFIED</h2>
        <h2>
          TOP SECRET REPORT ON OPERATIVE BY NAME OF{" "}
          <span className="text-decoration-black line-through decoration-8 hover:no-underline">
            {" "}
            Matthew Gibson{" "}
          </span>
          FROM THE{" "}
          <span className="text-decoration-black line-through decoration-8 hover:no-underline">
            {" "}
            UC-Berkeley{" "}
          </span>{" "}
          Program
        </h2>
      </div>
    </div>
  );
}
