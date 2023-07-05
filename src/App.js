import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SiteContainer from "./components/siteContainer";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <SiteContainer>{/*  routes  go here */}</SiteContainer>
      <Footer />
    </Router>
  );
}

export default App;
