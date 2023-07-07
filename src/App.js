import React from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import SiteContainer from "./components/siteContainer";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CommunicationChannels from "./pages/communicationChannels";
import ExecutiveSummary from "./pages/executiveSummary";
import FieldAssignments from "./pages/fieldAssignments";
import MainPage from "./pages/mainPage";
import OperationHistory from "./pages/operationHistory";
import OperativesProfile from "./pages/operativesProfile";
import PageNotFound from "./pages/pageNotFound";
import ReasonForRelease from "./pages/reasonForRelease";
import HeroPage from "./pages/heroPage";

function RouteWrapper() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <SiteContainer>
        <Routes>
          {/* <Route
            path="/communicationChannels"
            element={<CommunicationChannels />}
          /> */}
          {/* <Route path="/reasonForRelease" element={<ReasonForRelease />} /> */}
          {/* <Route path="/executiveSummary" element={<ExecutiveSummary />} /> */}
          <Route path="/fieldAssignments" element={<FieldAssignments />} />
          <Route path="/mainPage" element={<MainPage />} />
          {/* <Route path="/operationHistory" element={<OperationHistory />} /> */}
          <Route path="/operativesProfile" element={<OperativesProfile />} />
          {/* <Route path="/pageNotFound" element={<PageNotFound />} /> */}
          <Route path="/" element={<HeroPage />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </SiteContainer>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
}

export default App;
