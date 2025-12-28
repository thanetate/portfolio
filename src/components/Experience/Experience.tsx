
import { useEffect, useState } from "react";
import "./experience.less";

function ExperienceComponent() {
	const [aboutHref, setAboutHref] = useState(
		window.innerWidth >= 1000 ? "/#About" : "/about"
	);

	useEffect(() => {
		const onResize = () => {
			setAboutHref(window.innerWidth >= 1000 ? "/#About" : "/about");
		};

		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<div className="experience-component-container">
			<div className="currently">
				<div className="title">Currently -</div>
				<a href={aboutHref} className="experience">
					Application Developer @ Fisher Investments
				</a>
			</div>

			<div className="previously">
				<div className="title">Previously -</div>
				<a href={aboutHref} className="experience">
					Application Developer Intern @ Fisher Investments
				</a>
				<a href={aboutHref} className="experience">
					Freelance Web Developer
				</a>
			</div>
		</div>
	);
}

export default ExperienceComponent;

