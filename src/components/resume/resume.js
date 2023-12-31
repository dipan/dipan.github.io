import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./resume.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Resume = () => {
  const workExperienceList = [
    {
      designation: "Associate Consultant",
      organization: "Global Logic (India)",
      description:
        "Enhance existing functionalities in advertising technology domain. Monitor PROD jobs and perform OnCall tasks.",
      workPeriod: "12th April 2023 - Present",
    },
    {
      designation: "Senior Software Developer",
      organization: "Accenture (India)",
      description:
        "Develop nad enhance functionalities for an up-stream/down-stream application.",
      workPeriod: "24th September 2021 - 11th April 2023",
    },
    {
      designation: "Software Engineer",
      organization: "Edifixio (India)",
      description:
        "Develop back-end for an electricity equipment e-commerce website.",
      workPeriod: "26th May 2020 - 17th September 2021",
    },
    {
      designation: "Software Developer",
      organization: "Global IDs (India)",
      description: `Worked on a Data Ecosystem Management Suite product. 
        Mainly worked on Core Java. Being a part of server framework team I 
        used to developer APIs. Made imporvements in server performance.`,
      workPeriod: "5th February 2018 - 22nd May 2020",
    },
  ];
  const [infoMessage, setInfoMessage] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactInfoChange = (event, field) => {
    console.log("handleContactInfoChange");
    console.log(`${field}: ${event.target.value}`);
    setContactInfo((prevContactInfo) => ({
      ...prevContactInfo,
      [field]: event.target.value,
    }));
  };

  const sendEmail = async () => {
    console.log("sendEmail");
    const apiUrl = "https://droplet.dipan.dev/api/v0/email";
    const queryParams = `?name=${contactInfo.name}&email=mandaldipan01@gmail.com&subject=${contactInfo.subject}`;

    const requestBody = {
      html: `<b>From: ${contactInfo.email}</b><br/>
      <b>Subject: ${contactInfo.subject}</b><br/>
      <b>Message:</b> ${contactInfo.message}`,
      sender: {
        name: "Resume",
        email: "no-reply@dipan.dev",
      },
      replyTo: {
        name: contactInfo.name,
        email: contactInfo.email,
      },
    };

    try {
      console.log(contactInfo);
      if (contactInfo.subject) {
        const response = await fetch(apiUrl + queryParams, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers as needed
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setContactInfo((prevContactInfo) => ({
            ...prevContactInfo,
            subject: "",
            message: "",
          }));
          setInfoMessage(result.message);
          setTimeout(() => {
            setInfoMessage("");
          }, 5000);
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const downloadResume = () => {
    const fileName = "Resume_Dipan.pdf";
    const pdfFilePath = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/${fileName}`;
    console.log(`pdfFilePath: ${pdfFilePath}`);

    const blob = new Blob([""], { type: "application/pdf" });

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfFilePath;
    downloadLink.download = fileName;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">DIPAN MANDAL</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="photoOriginal.jpg"
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#works">
                My Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              DIPAN
              <span className="text-primary">MANDAL</span>
              <span className="download-file">
                <FileDownloadIcon
                  fontSize="large"
                  onClick={() => downloadResume()}
                />
              </span>
            </h1>
            <div className="subheading mb-5">
              C-44 SRINAGAR(W) GARIA STATION ROAD · INDIA, WEST BENGAL,
              KOLKATA-700094 · (+91) 7278516532 ·
              <a href="mailto:mandaldipan01@gmail.com">
                mandaldipan01@gmail.com
              </a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust, maintainable readable code. I am mainly experienced in
              developing back-end for an applcation. Can do pretty much
              front-end development as and when required. Interested in
              exploring different technologies.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/dipan-mandal-a04418132"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="social-icon"
                href="https://github.com/dipan"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.facebook.com/dipann.mandall"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/mandaldipan/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="social-icon"
                href="https://stackoverflow.com/users/10655467/dipan-mandal"
                target="_blank"
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            {workExperienceList.map((experience, i) => (
              <div
                key={i}
                className="d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="flex-grow-1">
                  <h3 className="mb-0">{experience.designation}</h3>
                  <div className="subheading mb-3">
                    {experience.organization}
                  </div>
                  <p>{experience.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">{experience.workPeriod}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">BENGAL INSTITUTE OF TECHNOLOGY</h3>
                <div className="subheading mb-3">Bachelor of Technology</div>
                <div>Computer Science & Engineering</div>
                <p>GPA: 7.8</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Passout - 2018</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">FUTUERE CAMPUS SCHOOL</h3>
                <div className="subheading mb-3">Higher Secondary School</div>
                <p>Aggregate Percentage: 78.8</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Passout - 2014</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">BDMI</h3>
                <div className="subheading mb-3">Secondary School</div>
                <p>Aggregate Percentage: 74.1</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Passout - 2012</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Java"
              >
                <i className="fab fa-java"></i>
              </li>
              {/* <!-- <li className="list-inline-item"><i className="fab fa-html5"></i></li> -->
          <!-- <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li> --> */}
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Javascript"
              >
                <i className="fab fa-js-square"></i>
              </li>
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Angular"
              >
                <i className="fab fa-angular"></i>
              </li>
              {/* <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="React"
              >
                <i className="fab fa-react"></i>
              </li> */}
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Node"
              >
                <i className="fab fa-node"></i>
              </li>
              {/* <!-- <li className="list-inline-item"><i className="fab fa-sass"></i></li> -->
          <!-- <li className="list-inline-item"><i className="fab fa-less"></i></li> -->
          <!-- <li className="list-inline-item"><i className="fab fa-gulp"></i></li> -->
          <!-- <li className="list-inline-item"><i className="fab fa-grunt"></i></li> --> */}
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="npm"
              >
                <i className="fab fa-npm"></i>
              </li>
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="git"
              >
                <i className="fab fa-git-alt"></i>
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a developer, I enjoy most of my time being
              outdoors. I enjoy cycling, swimming, skating, playing football and
              badminton.
            </p>
            <p className="mb-0">
              When forced indoors, I spend a large amount of my free time
              exploring the latest technology advancements in the back-end
              development world.
            </p>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="works">
          <div className="resume-section-content">
            <h2 className="mb-5">My Works</h2>
            <div className="my-works">
              <span>
                <a href="https://carbonit.vercel.app" target="_blank">
                  <img
                    src="./assets/icon/icon.png"
                    width="22px"
                    height="auto"
                  />
                  <span className="pl-2 works">
                    CarbonIt - Personal distributed clipboard
                  </span>
                </a>
              </span>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="contact">
          <div id="vueApp" className="resume-section-content">
            <h2 className="mb-5">Contact</h2>
            <div className="contact-form">
              <input
                type="text"
                className="input"
                placeholder="*Name"
                value={contactInfo.name}
                onChange={(event) => handleContactInfoChange(event, "name")}
              />
              <input
                type="email"
                className="input"
                placeholder="*Email"
                value={contactInfo.email}
                onChange={(event) => handleContactInfoChange(event, "email")}
              />
              <input
                type="text"
                className="input"
                placeholder="*Subject"
                value={contactInfo.subject}
                onChange={(event) => handleContactInfoChange(event, "subject")}
              />
              <textarea
                className="input"
                placeholder="*Message"
                value={contactInfo.message}
                onChange={(event) => handleContactInfoChange(event, "message")}
              ></textarea>
              <button
                className="main-btn"
                onClick={() => {
                  sendEmail();
                }}
              >
                Send message
              </button>
              <span>{infoMessage}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
