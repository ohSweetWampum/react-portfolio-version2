import React from "react";

const SiteContainer = ({ children }) => {
  return (
    <div
      className="  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 max-w-screen-xl mx-auto"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "./images/background.jpg"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default SiteContainer;
