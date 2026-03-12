import FooterComponent from "../../components/footer/footer";
import LineComponent from "../../components/line/line";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
  description: string;
  bubbles: bubbles[];
};

const experiences = [
  {
    id: 4,
    title: "Platform Engineer",
    company: "Mirion Technologies",
    companyUrl: "https://www.mirion.com",
    date: "2026 - Present",
    description:
      "Developing and maintaining cloud infrastructure and data platforms that power large-scale applications and data processing.",
    bubbles: [
      { bubble: "Python" },
      { bubble: "Databricks" },
      { bubble: "Azure" },
      { bubble: "Apache Spark" },
      { bubble: "Terraform" },
    ],
  },

  {
    id: 3,
    title: "Data Engineer",
    company: "Fisher Investments",
    companyUrl: "https://www.fisherinvestments.com",
    date: "2025 - 2026",
    description:
      "Built and maintained data pipelines on the Integrations team within the Portfolio Management Group, supporting systems managing $400B+ in assets under management",
    bubbles: [
      { bubble: "Azure" },
      { bubble: "Azure Data Factory" },
      { bubble: "Python" },
      { bubble: "Apache Airflow" },
      { bubble: "SQL" },
    ],
  },
  {
    id: 2,
    title: "Data Engineer Intern",
    company: "Fisher Investments",
    companyUrl: "https://www.fisherinvestments.com",
    date: "2025",
    description:
      "Built an observability tool which reduced error response times by 30% across systems managing $400B+ in assets under management",
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
    description:
      "Designed and developed a responsive, image-optimized portfolio site for a photography student, increasing site traffic by 100+ visitors in the first month.",
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
      <div key={experience.id}>
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
          Hello, I'm Thane! <br></br> A recent grad from the Unviersity of North
          Texas, with a degree in{" "}
          <span className="text-highlight-straight">Computer Science</span>.{" "}
          <br></br> Currently, I'm working at Mirion as a{" "}
          <span className="text-highlight">Platform Engineer</span>. Before
          that, I interned and worked at Fisher Investments as a Data Engineer.{" "}
          <br></br> Lately, I've been excited to learn more about Neovim,
          Python, and cloud-based infrastructure.
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
