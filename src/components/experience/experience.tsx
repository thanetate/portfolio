import "./experience.less";

function ExperienceComponent() {
	return (
		<div className="experience-component-container">
			<div className="currently">
				<div className="title">Currently -</div>
				<a href={"/#About"} className="experience">
					Application Developer @ Fisher Investments
				</a>
			</div>

			<div className="previously">
				<div className="title">Previously -</div>
				<a href={"/#About"} className="experience">
					Application Developer Intern @ Fisher Investments
				</a>
				<a href={"/#About"} className="experience">
					Freelance Web Developer
				</a>
			</div>
		</div>
	);
}

export default ExperienceComponent;

