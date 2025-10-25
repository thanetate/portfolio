import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import "./about.less";

const experiences = [
	{
		id: 3,
		title: "Software Engineer",
		company: "Fisher Investments",
		date: "Aug 2025 - Present",
	},
	{
		id: 2,
		title: "Software Engineer Intern",
		company: "Fisher Investments",
		date: "May - Aug 2025",
	},
	{
		id: 1,
		title: "Freelance Web Developer",
		date: "Mar 2025",
	},
];

function Aboutpage() {
	const experienceList = experiences.map((experience) => {
		return (
			<div key={experience.id}>
				<div className="rightleft-container">
					<div className="right">
						<div className="e-company">{experience.company}</div>
						<div className="e-title">{experience.title}</div>
					</div>
					<div className="left">
						<div className="e-date">{experience.date}</div>
					</div>
				</div>
				<LineComponent />
			</div>
		);
	});

	return (
		<div className="aboutpage-container">
			<div className="navbar-container">
				<NavBarComponent />
			</div>
			<div className="title">About Me</div>
			<div className="content">
				Hey, I’m Thane! My journey into tech began with a curiosity for creating
				websites, and today, I’m a student at the{" "}
				<mark> University of North Texas </mark>
				studying computer science with a minor in mathematics set to graduate in
				<mark> May 2026.</mark> <br></br> Over the past few years, I’ve immersed
				myself in software development through a blend of personal projects and
				university assignments. I’m particularly drawn to full-stack
				development, enjoying the balance between front-end creativity and
				back-end problem-solving.
				<br></br> These days, I’m expanding my skills in technologies like C#
				and the .NET Framework, always excited to tackle new challenges. I
				thrive on collaborating in team settings where I can both learn from
				others and contribute to solutions. When I’m not coding, you’ll find me{" "}
				<mark> rock climbing, </mark>
				hanging out with my two cats, or brainstorming ideas for my next
				project. Im currently trying to grow my technical abilities, and
				ultimately find my place in the tech industry.
			</div>
			<div className="image-container">
				<img src="/profile3.png" alt="" />
			</div>
			<div className="title two">Work Experience</div>
			<LineComponent />
			<div className="experience-container">{experienceList}</div>
		</div>
	);
}

export default Aboutpage;
