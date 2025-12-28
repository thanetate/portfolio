import NavBarComponent from "../../components/navbar/navbar";
import HeadComponent from "../../components/head/head";
import ExperienceComponent from "../../components/experience/experience";
import ProjectsComponent from "../../components/projects/projects";
import FooterComponent from "../../components/footer/footer";
import { motion } from "framer-motion";
import "./home.less";
import LineComponent from "../../components/line/line";
import Aboutpage from "../about/about";
import { useEffect, useState } from "react";
import Skillspage from "../skills/skills";
import Projectpage from "../project/project";

function Homepage() {
	const [activeSection, setActiveSection] = useState<string>("");

	// runs once on mount bc of []
	useEffect(() => {
		// reads current url
		const handleHashChange = () => {
			setActiveSection(window.location.hash);
		};
		// only fires on first load, so we call it 
		handleHashChange();
		// listen for future hash changes
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	return (
		<div className="homepage-container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>
				<div className="navbar-container">
					<NavBarComponent />
				</div>

				<div className="leftright-container">
					<div className="rightside-container">
						{!activeSection && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
								className="bg-white p-6 rounded-lg shadow-md"
							>
								<div className="home-container">
									<div className="leftside-container">
										<div className="head-container">
											<HeadComponent />
										</div>
										<div className="experience-container">
											<ExperienceComponent />
										</div>
									</div>


									<a className="projects-container">
										<ProjectsComponent />
									</a>
									<div className="footer-container">
										<LineComponent />
										<FooterComponent />
									</div>
								</div>
							</motion.div>
						)}
						{activeSection === "#About" && (
							<div className="about-container">
								<Aboutpage />
							</div>
						)}
						{activeSection === "#Skills" && (
							<div className="skills-container">
								<Skillspage />
							</div>
						)}
						{activeSection === "#Mapo" && (
							<div className="project-container">
								<Projectpage />
							</div>
						)}
						{activeSection === "#Theory" && (
							<div className="project-container">
								<Projectpage />
							</div>
						)}

					</div>
				</div>
			</motion.div>
		</div >
	);
}

export default Homepage;
