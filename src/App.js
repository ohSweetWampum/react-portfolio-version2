import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SiteContainer from "./components/siteContainer";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CommunicationChannels from "./pages/communicationChannels";
import ExecutiveSummary from "./pages/executiveSummary";
import FieldAssignments from "./pages/fieldAssignments";
import MainPage from "./pages/mainPage";
import OperationHistory from "./pages/operationHistory";
import OperativesProfile from "./pages/operativesProfile";
import PageNotFound from "./pages/pageNotFound";
import HeroPage from "./pages/heroPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <SiteContainer>
        <Routes>
          {/* <Route
            path="/communicationChannels"
            element={<CommunicationChannels />}
          /> */}
          {/* <Route path="/executiveSummary" element={<ExecutiveSummary />} />
          <Route path="/fieldAssignments" element={<FieldAssignments />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/operationHistory" element={<OperationHistory />} />
          <Route path="/operativesProfile" element={<OperativesProfile />} />
          <Route path="/pageNotFound" element={<PageNotFound />} /> */}
          <Route path="/" element={<HeroPage />} />

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </SiteContainer>
      <Footer />
    </Router>
  );
}

export default App;
