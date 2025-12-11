import { Link } from "react-router-dom";
import "./projects.less";

function ProjectsComponent() {
	return (
		<div className="projects-component-container">
			<Link className="project1-container" to="/projects/mapo">
				<video
					src="/mapo_d.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="title">Mapo</div>
				<div className="desc">
					Browser-based mind mapping tool, designed to be simple and intuitive.
				</div>
			</Link>
			<Link className="project2-container" to="/projects/theory">
				<img src="/theorydemo.png" alt="" />
				<div className="title">Theory</div>
				<div className="desc">
					An e-commerce store for climbing apparel, integrated with the Stripe
					API for secure checkout.
				</div>
			</Link>
		</div>
	);
}

export default ProjectsComponent;
