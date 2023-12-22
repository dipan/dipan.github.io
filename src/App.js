import logo from "./logo.svg";
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Drawer,
  ListItemIcon,
} from "@mui/material";
import {
  AccountCircle,
  Work,
  Code,
  School,
  Mail,
  ContactMail,
  Menu,
} from "@mui/icons-material";
import "./App.css";
import Resume from "./components/resume/resume";

function App() {
  const sections = [
    { text: "About", icon: <AccountCircle />, link: "#about" },
    { text: "Work Experience", icon: <Work />, link: "#workExperience" },
    { text: "Skills", icon: <Code />, link: "#skills" },
    { text: "Education", icon: <School />, link: "#education" },
    {
      text: "Contact Information",
      icon: <Mail />,
      link: "#contactInformation",
    },
    { text: "Contact Form", icon: <ContactMail />, link: "#contactForm" },
  ];

  const workExperienceList = [
    {
      designation: "ASSOCIATE CONSULTANT",
      organization: "Global Logic (India, Bangalore)",
      workPeriod: "12th April 2023 - Present",
      description:
        "Enhance existing functionalities in advertising technology domain. Monitor PROD jobs and perform OnCall tasks.",
    },
    {
      designation: "SENIOR SOFTWARE DEVELOPER",
      organization: "Accenture (India, Bangalore)",
      workPeriod: "24th September 2021 - 11th April 2023",
      description:
        "Develop nad enhance functionalities for an up-stream/down-stream application.",
    },
  ];
  return (
    <>
      <Resume />
    </>
  );
}

export default App;
