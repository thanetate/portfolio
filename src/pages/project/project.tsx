import FooterComponent from "../../components/footer/footer";
import LineComponent from "../../components/line/line";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./project.less";

function Projectpage() {
  const { projectname } = useParams();
  const location = useLocation();
  const [isDemoLoaded, setIsDemoLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const resolvedProjectName = useMemo(() => {
    if (projectname) return projectname.toLowerCase();
    if (location.hash) return location.hash.replace("#", "").toLowerCase();
    return "";
  }, [projectname, location.hash]);

  type Skill = {
    bubble: string;
  };

  type Demo = {
    image: string;
  };

  type Project = {
    paramname: string;
    name: string;
    description1: string;
    description2: string;
    image: Demo[];
    demo: string;
    skills: Skill[];
    team: string;
    github: string;
    live: string;
  };

  const projects: Project[] = [
    {
      paramname: "mapo",
      name: "Mapo",
      description1:
        "Mapo is a lightweight, browser-based mind mapping tool built for simplicity and ease of use.",
      description2:
        "Mind mapping is a technique used to help visually develop and organize ideas. They are most commonly used for note taking, brainstorming ideas, and project planning. By mapping ideas visually, we can break down and retain information better.",
      skills: [
        { bubble: "AWS" },
        { bubble: "Angular" },
        { bubble: "TypeScript" },
        { bubble: "Golang" },
        { bubble: "PostgreSQL" },
        { bubble: "Docker" },
        { bubble: "GitHub Actions" },
      ],
      team: "Ben Sivorivong",
      github: "https://github.com/bensivo/mapo",
      live: "https://mapo.ink/app/",
      demo: "/mapo-demo-fast.mov",
      image: [{ image: "/mapo_pic1.png" }, { image: "/mapo-homepage.png" }],
    },
    {
      paramname: "theory",
      name: "Theory",
      description1:
        "Theory is an e-commerce store for selling custom climbing apparel.",
      description2:
        "My friend and I have been rock climbing for seven years and have always wanted to start our own climbing brand. I took the opportunity to build a site where we could sell our apparel, featuring a secure checkout experience using the Stripe API.",
      skills: [
        { bubble: "Azure" },
        { bubble: "React" },
        { bubble: "TypeScript" },
        { bubble: "ASP.NET Core" },
        { bubble: "C#" },
        { bubble: "PostgreSQL" },
      ],
      team: "",
      github: "https://github.com/thanetate/theory",
      live: "https://www.theory.thanetate.dev/",
      demo: "/theory-demo-fast.mp4",
      image: [
        { image: "/theory-img-1.png" },
        { image: "/theory-img-2.png" },
        { image: "/theory-img-3.png" },
      ],
    },
    {
      paramname: "data",
      name: "Data Platform",
      description1:
        "A small end-to-end data engineering pipeline that simulates a real-world production workflow.",
      description2:
        "I wanted to deepen my understanding of modern tools like Azure, Databricks, Apache Spark, and Terraform. I built an automated pipeline that provisions cloud infrastructure with Terraform, loads raw data into Azure Data Lake Storage, and processes it through a medallion architecture using PySpark—all integrated securely with Databricks and Unity Catalog.",
      skills: [
        { bubble: "Azure" },
        { bubble: "Databricks" },
        { bubble: "Python" },
        { bubble: "PySpark" },
        { bubble: "SparkSQL" },
        { bubble: "Terraform" },
      ],
      team: "",
      github: "https://github.com/thanetate/data-engineering-platform",
      live: "https://adb-7405608124467958.18.azuredatabricks.net/dashboardsv3/01f139b6d70b1bacbcd97b6945df90e6/published?o=7405608124467958",
      demo: "Data-Engineering-Demo.mov",
      image: [
        { image: "/Mapo_Architecture_Diagram.png" },
        { image: "/Databricks_Notebook.png" },
      ],
    },
  ];

  const currentProject = projects.find(
    (project) => project.paramname.toLowerCase() === resolvedProjectName,
  );

  useEffect(() => {
    setIsDemoLoaded(false);
    setLoadedImages({});
  }, [resolvedProjectName]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const handleImageLoaded = (imageSrc: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [imageSrc]: true,
    }));
  };

  const isMapoProject = currentProject?.paramname === "mapo";

  return (
    <div className="projectpage-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="s-title">Project Details</div>
        <div className="title">{currentProject?.name}</div>
        <LineComponent />

        {currentProject ? (
          <div className="project-info">
            <div className="description1">{currentProject.description1}</div>
            <div className="description2">{currentProject.description2}</div>
            <div className="box-container">
              <LineComponent />
              <div className="skills-container">
                <div className="tech">Tech</div>
                <div className="bubbles-container">
                  {currentProject.skills.map((skill: Skill, index: number) => (
                    <div key={index} className="green-bubble">
                      {skill.bubble}
                    </div>
                  ))}
                </div>
              </div>
              {currentProject?.team && (
                <>
                  <LineComponent />
                  <div className="block-container">
                    <div className="block-title">Team</div>
                    <div className="block-info">{currentProject?.team}</div>
                  </div>
                </>
              )}
              <LineComponent />
              <div className="block-container">
                <div className="block-title">Github</div>
                <div className="block-info">
                  {/* target _blank opens a new tab, rel noopener is for security best practices	 */}
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-a"
                  >
                    View
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
              {currentProject?.live && (
                <>
                  <LineComponent />
                  <div className="block-container live-project-container">
                    <div className="block-title">Live Project</div>
                    <div className="block-info">
                      {/* target _blank opens a new tab, rel noopener is for security best practices	 */}
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-a"
                      >
                        View
                        <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </>
              )}
              <LineComponent />
              <div className="project-media-container">
                {currentProject?.demo && (
                  <div
                    className={`demo-media-frame ${currentProject.paramname === "data" ? "data-demo-frame" : ""} ${currentProject.paramname === "mapo" ? "mapo-demo-frame" : ""}`}
                  >
                    {!isDemoLoaded && (
                      <div className="media-placeholder" aria-hidden="true">
                        <div className="loading-spinner" />
                      </div>
                    )}
                    <video
                      src={currentProject?.demo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onLoadedData={() => setIsDemoLoaded(true)}
                      onError={() => setIsDemoLoaded(true)}
                      className={`demo ${isDemoLoaded ? "is-loaded" : ""}`}
                    />
                  </div>
                )}
                <div className="demo-image-container">
                  {currentProject.image.map((image: Demo, index: number) => (
                    <div key={index} className="demo-image-frame">
                      {!loadedImages[image.image] && (
                        <div className="media-placeholder" aria-hidden="true">
                          <div className="loading-spinner" />
                        </div>
                      )}
                      <img
                        src={image.image}
                        className={`demo-image ${isMapoProject ? "mapo-demo-image" : ""} ${loadedImages[image.image] ? "is-loaded" : ""}`}
                        onLoad={() => handleImageLoaded(image.image)}
                        onError={() => handleImageLoaded(image.image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <LineComponent />
              <FooterComponent />
            </div>
          </div>
        ) : (
          <p>Project not found.</p>
        )}
      </motion.div>
    </div>
  );
}
export default Projectpage;
