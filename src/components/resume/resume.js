import React from "react";
import PropTypes from "prop-types";
import "./resume.css";

const Resume = () => {
  let infoMessage;
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">DIPAN MANDAL</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="photoOriginal.jpg"
              alt=""
            />
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#works">
                My Works
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container-fluid p-0">
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              DIPAN
              <span class="text-primary">MANDAL</span>
            </h1>
            <div class="subheading mb-5">
              C-44 SRINAGAR(W) GARIA STATION ROAD · INDIA, WEST BENGAL,
              KOLKATA-700094 · (+91) 7278516532 ·
              <a href="mailto:mandaldipan01@gmail.com">
                mandaldipan01@gmail.com
              </a>
            </div>
            <p class="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust, maintainable readable code. I am mainly experienced in
              developing back-end for an applcation. Can do pretty much
              front-end development as and when required. Interested in
              exploring different technologies.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/dipan-mandal-a04418132"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                class="social-icon"
                href="https://github.com/dipan"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                class="social-icon"
                href="https://www.facebook.com/dipann.mandall"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="social-icon"
                href="https://www.instagram.com/mandaldipan/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="social-icon"
                href="https://stackoverflow.com/users/10655467/dipan-mandal"
                target="_blank"
              >
                <i class="fab fa-stack-overflow"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Associate Consultant</h3>
                <div class="subheading mb-3">Global Logic (India)</div>
                <p>
                  Enhance existing functionalities in advertising technology
                  domain. Monitor PROD jobs and perform OnCall tasks.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">12th April 2023 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Senior Software Developer</h3>
                <div class="subheading mb-3">Accenture (India)</div>
                <p>
                  Develop nad enhance functionalities for an
                  up-stream/down-stream application.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">
                  24th September 2021 - 11th April 2023
                </span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Software Engineer</h3>
                <div class="subheading mb-3">Edifixio (India)</div>
                <p>
                  Develop back-end for an electricity equipment e-commerce
                  website.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">
                  26th May 2020 - 17th September 2021
                </span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Software Developer</h3>
                <div class="subheading mb-3">Global IDs (India)</div>
                <p>
                  Worked on a Data Ecosystem Management Suite product. Mainly
                  worked on Core Java. Being a part of server framework team I
                  used to developer APIs. Made imporvements in server
                  performance.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">
                  5th February 2018 - 22nd May 2020
                </span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">BENGAL INSTITUTE OF TECHNOLOGY</h3>
                <div class="subheading mb-3">Bachelor of Technology</div>
                <div>Computer Science & Engineering</div>
                <p>GPA: 7.8</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Passout - 2018</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">FUTUERE CAMPUS SCHOOL</h3>
                <div class="subheading mb-3">Higher Secondary School</div>
                <p>Aggregate Percentage: 78.8</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Passout - 2014</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">BDMI</h3>
                <div class="subheading mb-3">Secondary School</div>
                <p>Aggregate Percentage: 74.1</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Passout - 2012</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Java"
              >
                <i class="fab fa-java"></i>
              </li>
              {/* <!-- <li class="list-inline-item"><i class="fab fa-html5"></i></li> -->
          <!-- <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li> --> */}
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Javascript"
              >
                <i class="fab fa-js-square"></i>
              </li>
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Angular"
              >
                <i class="fab fa-angular"></i>
              </li>
              {/* <!-- <li class="list-inline-item"><i class="fab fa-react"></i></li> --> */}
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Node"
              >
                <i class="fab fa-node"></i>
              </li>
              {/* <!-- <li class="list-inline-item"><i class="fab fa-sass"></i></li> -->
          <!-- <li class="list-inline-item"><i class="fab fa-less"></i></li> -->
          <!-- <li class="list-inline-item"><i class="fab fa-wordpress"></i></li> -->
          <!-- <li class="list-inline-item"><i class="fab fa-gulp"></i></li> -->
          <!-- <li class="list-inline-item"><i class="fab fa-grunt"></i></li> --> */}
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="npm"
              >
                <i class="fab fa-npm"></i>
              </li>
              <li
                class="list-inline-item"
                data-toggle="tooltip"
                data-placement="bottom"
                title="git"
              >
                <i class="fab fa-git-alt"></i>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a developer, I enjoy most of my time being
              outdoors. I enjoy biking, playing football and skating.
            </p>
            <p class="mb-0">
              When forced indoors, I spend a large amount of my free time
              exploring the latest technology advancements in the back-end
              development world.
            </p>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="works">
          <div class="resume-section-content">
            <h2 class="mb-5">My Works</h2>
            <div class="my-works">
              <span>
                <a href="https://carbonit.vercel.app" target="_blank">
                  <img
                    src="./assets/icon/icon.png"
                    width="22px"
                    height="auto"
                  />
                  <span class="pl-2 works">
                    CarbonIt - Personal distributed clipboard
                  </span>
                </a>
              </span>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="contact">
          <div id="vueApp" class="resume-section-content">
            <h2 class="mb-5">Contact</h2>
            <div class="contact-form">
              <input type="text" class="input" placeholder="*Name" />
              <input type="email" class="input" placeholder="*Email" />
              <input type="text" class="input" placeholder="*Subject" />
              <textarea class="input" placeholder="*Message"></textarea>
              <button class="main-btn">Send message</button>
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
