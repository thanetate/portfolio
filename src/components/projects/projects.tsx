import "./projects.less";

function ProjectsComponent() {
	return (
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
				<div className="title">Theory</div>
				<div className="desc">
					An e-commerce store for climbing apparel, integrated with the Stripe
					API for secure checkout.
				</div>
			</a>
		</div>
	);
}

export default ProjectsComponent;
