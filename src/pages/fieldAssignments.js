import React from "react";

const FieldAssignments = () => {
  const jobs = [
    {
      date: "May 2023 - Present",
      employer: "RDVU Connect LLC.",
      position: "Software Engineer",
      responsibilities: [
        "Develop and maintain web applications using JavaScript and MySQL",
        "Design and implement RESTful APIs to support client side applications",
        "Collaborate with other developers to create scalable and maintainable code ",
        " Stay up to date with emerging trends and technologies in software development",
        " Optimize code performance and improve system scalability",
        "Debug and troubleshoot code issues as they arise",
      ],
      contact: "James Gui: (715)-305-0360",
    },
    {
      date: "March 2020 - June 2022",
      employer: "MilliporeSigma",
      position: "Analytical Associate Scientist",
      responsibilities: [
        "Helped develop methodologies for analyzing active pharmaceutical ingredients (APIs), focusing on antibody-drug conjugates (ADCs), key to multiple cancer therapies",

        "Proficient in operating cutting-edge and traditional analytical instruments such as HPLC, GC, LCMS, TGA, KF, FTIR, and NMR, and analyzing the data, also competent at equipment troubleshooting and maintaining project timelines",

        "Collaborated with clients to meet project goals, with an emphasis on safety due to the potency and toxicity of the compounds handled",
      ],
      contact: "Wen Lynt: wen.lynt@milliporesigma.com, (608)-571-8990",
    },
    {
      date: "March 2020 - June 2022",
      employer: "Algenol Biotech",
      position: "Downstream Operations Associate",
      responsibilities: [
        "Responsible for implementing/improving manufacturing and operations processes in collaboration with others",

        "Responsible for training operations technicians and assistants on plant SOPs",

        "Lead downstream operations team (product processing, product sterilization, and product packaging and shipping)",
      ],
      contact: "Ben Gardner: ben.gardner@algenol.com, (919)-407-1797",
    },
    {
      date: "May 2018 - December 2019",
      employer: "USDA Dairy Forage Research Center",
      position: "Assistant Laboratory Scientist",
      responsibilities: [
        "Assisted supervisor by running daily experiments (e.g., bioassays, analysis of feed, etc.)",

        "Traveled to research farms and collected biological samples from dairy cows (blood, urine, feces)",
      ],
      contact: "Wendy Radloff: wendy.radloff@usda.gov, (608)-513-4421",
    },
    {
      date: "May 2019 - December 2019",
      employer: "NCD Technologies",
      position: "Intern",
      responsibilities: [
        "Sourced chemicals and materials for daily operations",

        "Researched scientific literature information (using databases such as PubMed, Science Direct, Web of Science, etc.) in order to keep up with the field and run custom experiments",
      ],
      contact: "Aiping Zeng: aiping@ncdtechnologies.com, (608)-441-8312",
    },
  ];

  return (
    <div className="w-screen h-screen overflow-x-auto">
      <table className="w-full h-full text-lg font-bold tracking-wide text-left text-black uppercase border-b shadow-pen">
        <thead>
          <tr>
            <th className="px-4 py-3 border-black border text-2xl">
              Dates Deployed
            </th>
            <th className="px-4 py-3 border-black border text-2xl">Client</th>
            <th className="px-4 py-3 border-black border text-2xl">
              Assignment
            </th>
            <th className="px-4 py-3 border-black border text-2xl">
              Operational Duties
            </th>
            <th className="px-4 py-3 border-black border text-2xl">Handler</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td className="px-4 py-3 border-black border text-xl">
                {job.date}
              </td>
              <td className="px-4 py-3 border-black border text-xl">
                {job.employer}
              </td>
              <td className="px-4 py-3 border-black border text-xl">
                {job.position}
              </td>
              <td className="px-4 py-3 border-black border text-xl ">
                <ul>
                  {job.responsibilities.map((responsibility, resIndex) => (
                    <li
                      key={resIndex}
                      class="text-decoration-black line-through decoration-8 hover:no-underline "
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </td>

              <td className="px-4 py-3 border-black border text-xl">
                {job.contact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FieldAssignments;
