import FooterComponent from "../../components/footer/footer";
import { motion } from "framer-motion";
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
						<div className="e-title">{experience.title}</div>
						<div className="e-company">{experience.company}</div>
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
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>

				<div className="navbar-container">
					<NavBarComponent />
				</div>
				<div className="title">About Me</div>
				<LineComponent />
				<div className="content">
					Hello! <br></br> Lately, I’ve been excited to learn more about Neovim and Lua. At work, I’m learning more about Microsoft Azure and how front-, middle-, and back-office systems operate in the finance space.
				</div>
				<div className="title two"> Education </div>
				<LineComponent />
				<div className="education-container">
					<div className="rightleft-container">
						<div className="right">
							<div className="e-title">University of North Texas</div>
							<div className="e-company">Bachelor of Science, Computer Science</div>
							<div className="e-company">Minor in Mathematics</div>
						</div>
						<div className="left">
							<div className="e-date">2021 - Present</div>
						</div>
					</div>
				</div>
				<LineComponent />
				<div className="title two">Work Experience</div>
				<LineComponent />
				<div className="experience-container">{experienceList}</div>
				{/* <LineComponent /> */}
				<FooterComponent />
			</motion.div>
		</div>
	);
}

export default Aboutpage;
