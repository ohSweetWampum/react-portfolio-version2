import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/operativesProfile">
          Operatives Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/fieldAssignments">
          Field Assignments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/communicationChannels">
          Communication Channels
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/operationHistory">
          Operation History
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
