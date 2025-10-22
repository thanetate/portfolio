import NavBarComponent from "../../components/navbar/navbar";
import HeadComponent from "../../components/head/head";
import ExperienceComponent from "../../components/experience/experience";
import ProjectsComponent from "../../components/projects/projects";
import FooterComponent from "../../components/footer/footer";
import { motion } from "framer-motion";
import "./home.less";

function Homepage() {
	return (
		<div className="homepage-container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>
				<div className="leftright-container">
					<div className="navbar-container">
						<NavBarComponent />
					</div>
					<div className="head-container">
						<HeadComponent />
					</div>
					<div className="rightside-container">
						<div className="experience-container">
							<ExperienceComponent />
						</div>
						<div className="projects-container">
							<ProjectsComponent />
						</div>
						<div className="footer-container">
							<FooterComponent />
						</div>
					</div>
					{/* <div className="rightside-container">
						<RightSide />
					</div> */}
				</div>
			</motion.div>
		</div>
	);
}

export default Homepage;
