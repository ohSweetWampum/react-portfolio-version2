import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import OperativesProfile from "./operativesProfile";
import FieldAssignments from "./fieldAssignments";
import CommunicationChannels from "./communicationChannels";
import OperationHistory from "./operationHistory";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Operatives Profile":
        return <OperativesProfile />;
      case "Field Assignments":
        return <FieldAssignments />;
      case "Communication Channels":
        return <CommunicationChannels />;
      case "Operation History":
        return <OperationHistory />;
      default:
        return <OperativesProfile />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      <main>{renderPage()}</main>

      <Footer />
    </div>
  );
}
