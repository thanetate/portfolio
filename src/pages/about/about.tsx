import FooterComponent from "../../components/footer/footer";
import LineComponent from "../../components/line/line";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import "./about.less";

type bubbles = {
  bubble: string;
};

type experiences = {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  date: string;
  description: ReactNode;
  bubbles: bubbles[];
};

const experiences = [
  {
    id: 4,
    title: "Platform Engineer",
    company: "Mirion",
    companyUrl: "https://www.mirion.com",
    date: "2026 - Present",
    description: "",
    bubbles: [],
  },

  {
    id: 3,
    title: "Data Engineer",
    company: "Fisher Investments",
    companyUrl: "https://www.fisherinvestments.com",
    date: "2025 - 2026",
    description: (
      <div className="bullet-points-container">
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Enhanced scalable data pipelines in Azure Data Factory supporting
            $300B+ AUM, ensuring data reliability and consistent delivery.
          </span>
        </div>
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Automated batch pipeline orchestration by developing Python-based
            Apache Airflow DAGs for a proof-of-concept.
          </span>
        </div>
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Owned observability dashboards, achieving 100% monitoring coverage
            of mission-critical ETL pipelines using Splunk and Dynatrace.
          </span>
        </div>
      </div>
    ),
    bubbles: [
      { bubble: "Azure" },
      { bubble: "Python" },
      { bubble: "SQL" },
      { bubble: "Azure Data Factory" },
      { bubble: "Apache Airflow" },
      { bubble: "Splunk" },
      { bubble: "Dynatrace" },
    ],
  },
  {
    id: 2,
    title: "Data Engineer Intern",
    company: "Fisher Investments",
    companyUrl: "https://www.fisherinvestments.com",
    date: "2025",
    description: (
      <div className="bullet-points-container">
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Reduced Incident response times by 30% for mission-critical data
            pipelines supporting $300B+ AUM using observability dashboards with
            Splunk and Dynatrace.
          </span>
        </div>
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Built end-to-end observability by integrating 500k+ daily logs from
            Azure Data Factory, REST APIs, and SQL-based systems.
          </span>
        </div>
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Enhanced observability for 450+ pipelines by implementing nested
            pipeline tracing, improving log visibility and accelerating issue
            diagnosis.
          </span>
        </div>
      </div>
    ),
    bubbles: [
      { bubble: "Splunk" },
      { bubble: "Dynatrace" },
      { bubble: "Azure" },
      { bubble: "Azure Data Factory" },
      { bubble: "SQL" },
    ],
  },
  {
    id: 1,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2024",
    description: (
      <div className="bullet-points-container">
        <div className="bullet-point">
          <i className="ri-asterisk bullet-icon"></i>
          <span>
            Designed and developed a responsive, image-optimized portfolio site
            for a photography student, increasing site traffic by 100+ visitors
            in the first month.
          </span>
        </div>
      </div>
    ),
    bubbles: [
      { bubble: "React" },
      { bubble: "TypeScript" },
      { bubble: "Figma" },
    ],
  },
];

function Aboutpage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const experienceList = experiences.map((experience) => {
    return (
      <div key={experience.id} className="experience-item">
        <div className="rightleft-container">
          <div className="right">
            <div className="e-title">{experience.title}</div>
          </div>
          <div className="left">
            <div className="e-date">{experience.date}</div>
          </div>
        </div>
        <div className="e-company">
          {experience.companyUrl ? (
            <a
              className="e-company-link"
              href={experience.companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </div>
        {experience.description && (
          <div className="e-description">{experience.description}</div>
        )}
        <div className="bubbles-container">
          {experience.bubbles.map((bubble, index) => (
            <div key={index} className="green-bubble">
              {bubble.bubble}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="aboutpage-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="title">About Me</div>
        <LineComponent />
        <div className="content">
          Hello, I’m Thane! <br></br>I recently graduated from the{" "}
          <a
            className="about-inline-link"
            href="https://www.unt.edu"
            target="_blank"
            rel="noreferrer"
          >
            University of North Texas
          </a>{" "}
          with a degree in Computer Science and currently work as a Platform
          Engineer at{" "}
          <a
            className="about-inline-link"
            href="https://www.mirion.com"
            target="_blank"
            rel="noreferrer"
          >
            Mirion
          </a>
          . Before this, I interned and worked at{" "}
          <a
            className="about-inline-link"
            href="https://www.fisherinvestments.com"
            target="_blank"
            rel="noreferrer"
          >
            Fisher Investments
          </a>
          , where I got my first real exposure to data engineering. <br></br>
          That experience sparked a strong interest in the field, and lately
          I’ve been diving deeper into tools like Azure, Databricks, and Claude
          to continue building in the data space.
        </div>
        <div className="title-two">Experience</div>
        <LineComponent />
        <div className="experience-container">{experienceList}</div>
        <div className="title-two">Education</div>
        <LineComponent />
        <div className="education-container">
          <div className="rightleft-container">
            <div className="right">
              <div className="e-title">University of North Texas</div>
              <div className="e-company">
                Bachelor of Science, Computer Science
              </div>
              <div className="e-minor">Minor in Mathematics</div>
            </div>
            <div className="left">
              <div className="e-date">2021 - 2026</div>
            </div>
          </div>
        </div>
        <LineComponent />
        <FooterComponent />
      </motion.div>
    </div>
  );
}
export default Aboutpage;
