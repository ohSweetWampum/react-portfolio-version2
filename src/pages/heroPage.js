import { useState } from "react";
import circleLogo from "../UCBCircleLogo.png";
import bannerLogo from "../UCBBannerLogo.png";
import { Link } from "react-router-dom";

const heroPageNavigation = [
  { name: "Reason For Release", href: "/reasonForRelease" },
  { name: "Executive Summary", href: "/executiveSummary" },
  { name: "Findings And Conclusions", href: "/findingsAndConclusions" },
];

export default function HeroPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-">UNCLASSIFIED</h1>
        <h1 className="lead">
          TOP SECRET REPORT ON OPERTIVE BY NAME OF <span>solid black here</span>{" "}
          FROM THE<span>solid black here</span> PROGRAM{" "}
        </h1>
        {/* Have a thin black line going through the entire p text */}
        <h2>UC-Berkeley Select Committee on Intelligence</h2>
        <h1>
          Committe Study of top secret operatives and their usefulness to
          private industry
        </h1>
        {/* put in italics */}
        <img src={circleLogo} alt="UCB Circle Logo" />
        <img src={bannerLogo} alt="UCB Banner Logo" />
        <div className="hidden lg:flex lg:gap-x-12">
          {heroPageNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <h1>Approved June 12th, 2023</h1>
        <h1>Updated July 3rd, 2023</h1>
        <h1>Declassification Revisions July 3rd, 2023</h1>
        {/* all three h1's in italics */}
        <h1 className="display-">UNCLASSIFIED</h1>
        <h1 className="lead">
          TOP SECRET REPORT ON OPERTIVE BY NAME OF <span>solid black here</span>{" "}
          FROM THE<span>solid black here</span> PROGRAM{" "}
        </h1>
      </div>
    </div>
  );
}
