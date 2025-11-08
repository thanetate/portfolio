import { useParams } from "react-router-dom";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import { motion } from "framer-motion";
import "./project.less";

function Projectpage() {
	const { projectname } = useParams();

	type Project = {
		paramname: string,
		name: string,
		description: string,
	};

	const projects: Project[] = [
		{
			paramname: "mapo",
			name: "Mapo",
			description: "",
		},
		{
			paramname: "theory",
			name: "Theory",
			description: "",

		},
		{
			paramname: "readingrealm",
			name: "Reading Realm",
			description: "",

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
						<div className="title">{currentProject.name}</div>
						<div className="description">{currentProject.description}</div>
					</div>
				) : (
					<p>Project not found.</p>
				)}
			</motion.div>
		</div>
	)
}

export default Projectpage;
