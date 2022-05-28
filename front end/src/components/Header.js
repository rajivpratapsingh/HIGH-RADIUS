import React from "react";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Box from "@mui/material/Box";
import one from "./one.png";
import two from "./two.png";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import "./component.css";
// import { Box } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";

import "./component.css";
export default function Header() {
  return (
    <div>
      <Navbar className="Nav">
        <Container>
          <div className="one">
            <img src={one} alt="like" />
          </div>
          <div className="two">
            <img src={two} alt="like" />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
