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
        <h2>UNCLASSIFIED</h2>
        <h2>
          TOP SECRET REPORT ON OPERATIVE BY NAME OF{" "}
          <span>solid black here</span> FROM THE<span>solid black here</span>{" "}
          PROGRAM{" "}
        </h2>
        {/* Have a thin black line going through the entire p text */}
        <h1 className="bold">UC-Berkeley Select Committee on Intelligence</h1>
        <h1 className="italic">
          Committee Study of top secret operatives and their usefulness to
          private industry
        </h1>
        {/* put in italics */}
        <img src={circleLogo} alt="UCB Circle Logo" />

        <div className="block lg:hidden">
          {heroPageNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-base leading-6 text-black underline-none block"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <h4 className="italic">Approved June 12th, 2023</h4>
        <h4 className=" italic">Updated July 3rd, 2023</h4>
        <h4 className=" italic">Declassification Revisions July 3rd, 2023</h4>
        {/* all three h1's in italics */}
        <h2>UNCLASSIFIED</h2>
        <h2>
          TOP SECRET REPORT ON OPERATIVE BY NAME OF{" "}
          <span>solid black here</span> FROM THE<span>solid black here</span>{" "}
          PROGRAM{" "}
        </h2>
      </div>
    </div>
  );
}
