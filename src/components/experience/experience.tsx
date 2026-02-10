
import "./experience.less";

function ExperienceComponent() {

	return (
		<div className="experience-component-container">
			<div className="currently">
				<div className="title">Currently -</div>
				<a href={"/#About"} className="experience">
					Platform Engineer @ Mirion
				</a>
			</div>

			<div className="previously">
				<div className="title">Previously -</div>
				<a href={"/#About"} className="experience">
					Data Engineer @ Fisher Investments
				</a>

				<a href={"/#About"} className="experience">
					Data Engineer Intern @ Fisher Investments
				</a>
				<a href={"/#About"} className="experience">
					Freelance Web Developer
				</a>
			</div>
		</div>
	);
}

export default ExperienceComponent;

