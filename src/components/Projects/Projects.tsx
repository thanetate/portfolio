import { motion } from "framer-motion";
import "./projects.less";

function ProjectsComponent() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.3 }}
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="bg-white p-6 rounded-lg shadow-md"
			>
				<div className="projects-component-container">
					<a className="project1-container" href="/#Mapo">
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
					</a>
					<a className="project2-container" href="/#Theory">
						<img src="theory-img-1.png" alt="" />
						{/* should i do demo or img?	 */}
						<div className="title">Theory</div>
						<div className="desc">
							An e-commerce store for climbing apparel, integrated with the Stripe
							API for secure checkout.
						</div>
					</a>
				</div>
			</motion.div >
		</motion.div >
	);
}

export default ProjectsComponent;
