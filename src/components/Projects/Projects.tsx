import "./projects.less";

function ProjectsComponent() {
	return (
		<div className="projects-component-container">
			<div className="project1-container">
				<img src="/mapodemo.png" alt="" />
				<div className="title">Mapo</div>
				<div className="desc">
					Browser-based mind mapping tool, designed to be simple and intuitive.
				</div>
			</div>
			<div className="project2-container">
				<img src="/theorydemo.png" alt="" />
				<div className="title">Theory</div>
				<div className="desc">
					An e-commerce store for climbing apparel, integrated with the Stripe
					API for secure checkout.
				</div>
			</div>
			<div className="project3-container">
				<img src="/readingrealm.png" alt="" />
				<div className="title">Reading Realm</div>
				<div className="desc">
					A platform for book lovers to track their reading,
					share reviews, and set goals with the help of the Google Books API.
				</div>
			</div>
		</div>
	);
}

export default ProjectsComponent;
