import "./experience.less";

function ExperienceComponent() {
	return (
		<div className="experience-component-container">
			<div className="currently">
				<div className="title">Currently -</div>
				<div className="experience">Software Engineer @ Fisher Investments</div>
			</div>
			<div className="previously">
				<div className="title">Previously -</div>
				<div className="experience">
					Software Engineer Intern @ Fisher Investments
				</div>
				<div className="experience">Freelance Web Developer</div>
			</div>
		</div>
	);
}
export default ExperienceComponent;
