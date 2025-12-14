import NavBarComponent from "../../components/navbar/navbar";
import HeadComponent from "../../components/head/head";
import ExperienceComponent from "../../components/experience/experience";
import ProjectsComponent from "../../components/projects/projects";
import FooterComponent from "../../components/footer/footer";
import { motion } from "framer-motion";
import "./home.less";
import LineComponent from "../../components/line/line";

function Homepage() {
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
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="bg-white p-6 rounded-lg shadow-md"
					>

						<div className="head-container">
							<HeadComponent />
						</div>
						<div className="rightside-container">
							<a className="experience-container">
								<ExperienceComponent />
							</a>
							<a className="projects-container">
								<ProjectsComponent />
							</a>
							<a className="footer-container">
								<LineComponent />
								<FooterComponent />
							</a>
						</div>
					</motion.div>
					{/* <div className="rightside-container">
						<RightSide />
					</div> */}
				</div>
			</motion.div>
		</div>
	);
}

export default Homepage;
