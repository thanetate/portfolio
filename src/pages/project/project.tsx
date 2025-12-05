import { useParams } from "react-router-dom";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import { motion } from "framer-motion";
import "./project.less";
import FooterComponent from "../../components/footer/footer";

function Projectpage() {
	const { projectname } = useParams();

	type Project = {
		paramname: string,
		name: string,
		description: string,
		image: string,
	};

	const projects: Project[] = [
		{
			paramname: "mapo",
			name: "Mapo",
			description: "Mapo is a lightweight, browser-based mind mapping tool built for simplicity and ease of use. While the project was started by Ben Sivo, my contributions centered on improving the phone experience — adding smooth touch interactions and essential features like copy and delete functionality.",
			image: "/mapo_pic1.png",
		},
		{
			paramname: "theory",
			name: "Theory",
			description: "",
			image: "",

		},
		{
			paramname: "readingrealm",
			name: "Reading Realm",
			description: "",
			image: "",
		},
	];

	const currentProject = projects.find(
		(object) => object.paramname.toLowerCase() === projectname?.toLowerCase()
	);

	return (
		<div className="projectpage-container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>

				<div className="navbar-container">
					<NavBarComponent />
				</div>
				<div className="s-title">Project Details</div>
				<div className="title">{currentProject?.name}</div>
				<LineComponent />

				{currentProject ? (
					<div className="project-info">
						<div className="description">{currentProject.description}</div>
						<div className="box-container">
							<LineComponent />
							<div className="skills-container">
								<div className="type">Type</div>
								<div className="skills"></div>
							</div>
						</div>
					</div>
				) : (
					<p>Project not found.</p>
				)}
				{/* <FooterComponent /> */}
			</motion.div>
		</div>
	)
}

export default Projectpage;
