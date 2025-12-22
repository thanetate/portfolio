import { Link } from "react-router-dom";
import "./projects.less";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function ProjectsComponent() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth >= 1000);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClick = (hash: string) => {
		if (isDesktop) {
			window.location.hash = hash; // triggers Homepage's hash listener
		}
	};
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
					{isDesktop ? (
						<>
							<div
								className="project1-container"
								onClick={() => handleClick("#Mapo")}
							>
								<video src="/mapo_d.mp4" autoPlay loop muted playsInline />
								<div className="title">Mapo</div>
								<div className="desc">
									Browser-based mind mapping tool, designed to be simple and intuitive.
								</div>
							</div>

							<div
								className="project2-container"
								onClick={() => handleClick("#Theory")}
							>
								<img src="theory-img-1.png" alt="" />
								<div className="title">Theory</div>
								<div className="desc">
									An e-commerce store for climbing apparel, integrated with Stripe.
								</div>
							</div>
						</>
					) : (
						<>
							< Link className="project1-container" to="/projects/mapo">
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
								<img src="theory-img-1.png" alt="" />
								{/* should i do demo or img?	 */}
								<div className="title">Theory</div>
								<div className="desc">
									An e-commerce store for climbing apparel, integrated with the Stripe
									API for secure checkout.
								</div>
							</Link>
						</>
					)}
				</div>
			</motion.div >
		</motion.div >
	);
}

export default ProjectsComponent;
