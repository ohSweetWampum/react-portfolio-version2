import React from "react";

const ReasonForRelease = () => {
  const reasons = [
    "Comprehensive Full-Stack Development Skills: His successful completion of the Full-Stack Web Developer Bootcamp from UC-Berkeley Extension demonstrates his dedication and commitment to mastering a wide range of technical skills necessary for software development. His proficiency in HTML, CSS, JavaScript (including popular libraries like jQuery, Node.js, and React.js), RESTful APIs, and database management (SQL and NoSQL) positions him as a well-rounded candidate with the ability to handle various aspects of software development.",

    "Valuable Professional Experience: His experience as a Software Engineer at RDVU Connect LLC showcases his practical application of software engineering skills. During his tenure, he actively contributed to the development and maintenance of web applications using JavaScript and MySQL. His collaborative nature and ability to work effectively in a team environment are evident through his successful collaboration with other developers to create scalable and maintainable code.",

    "Analytical Problem-Solving Abilities: His previous experience in the life science industry, particularly in analytical science and research, has honed his analytical skills and attention to detail. These skills are highly transferable to software development, as they enable him to analyze complex problems, identify efficient solutions, and troubleshoot code issues effectively. His track record of optimizing code performance and improving system scalability demonstrates his ability to tackle challenges with a methodical approach.",

    "Extensive Technical Skill Set: With his proficiency in a diverse range of software development technologies, including HTML, CSS, JavaScript, and frameworks like React.js, he possesses a strong foundation for tackling complex software projects. His ability to work with RESTful APIs, develop progressive web applications, and apply unit testing with JEST reflects his commitment to delivering high-quality software solutions.",

    "Educational Dedication: While his educational background lies in biology, his successful completion of the Full-Stack Web Developer Bootcamp illustrates his determination to transition into the software development field. His solid educational foundation, combined with his practical experience and technical expertise, demonstrates his readiness to apply his knowledge and skills to software-related roles.",
  ];
  return (
    <div className="  bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-black-600">
                REASON FOR RELEASE of UNCLASSIFIED INFORMATION
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-black-600 sm:text-4xl">
                As determined by the UC-Berkeley Select Committee on
                Intelligence
              </p>
              <p className="mt-6 text-lg leading-8 text-black-600">
                As Follows:
              </p>
              <ul>
                {reasons.map((reason, resIndex) => (
                  <li key={resIndex}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReasonForRelease;
