import { useParams } from "react-router-dom";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import { motion } from "framer-motion";
import "./project.less";

function Projectpage() {
	const { projectname } = useParams();
	const projecttitle = projectname ? projectname.charAt(0).toUpperCase() + projectname.slice(1) : "";
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
				<div className="title">{projecttitle}</div>
				<LineComponent />
			</motion.div>
		</div>
	)
}

export default Projectpage;
