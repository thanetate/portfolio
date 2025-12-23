import FooterComponent from "../../components/footer/footer";
import { motion } from "framer-motion";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import "./about.less";

type bullets = {
	bullet: string,
};

type experiences = {
	id: number,
	title: string,
	company: string,
	date: string,
	bullets: bullets[],
};

const experiences = [
	{
		id: 3,
		title: "Software Engineer",
		company: "Fisher Investments",
		date: "Aug 2025 - Present",
		bullets: [
			{}
		]
	},
	{
		id: 2,
		title: "Software Engineer Intern",
		company: "Fisher Investments",
		date: "May - Aug 2025",
		bullets: [
			{ bullet: "Cut error response times by 30% using a unified Splunk dashboard." },
			{ bullet: "Built end-to-end observability by integrating 500k+ daily logs from Azure Data Factory, REST APIs, and Dynatrace." },
			{ bullet: "Cut error response times by 30% using a unified Splunk dashboard." },
		]

	},
	{
		id: 1,
		title: "Freelance Web Developer",
		date: "Mar 2025",
		bullets: [
			{ bullet: "Cut error response times by 30% using a unified Splunk dashboard." }
		]

	},
];

function Aboutpage() {
	const experienceList = experiences.map((experience) => {
		return (
			<div key={experience.id}>
				<LineComponent />
				<div className="rightleft-container">
					<div className="right">
						<div className="e-title">{experience.title}</div>
						<div className="e-company">{experience.company}</div>
					</div>
					<div className="left">
						<div className="e-date">{experience.date}</div>
					</div>
				</div>
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
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="bg-white p-6 rounded-lg shadow-md"
				>

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
								<div className="e-date">May 2026</div>
							</div>
						</div>
					</div>
					<div className="title two">Work Experience</div>
					<div className="experience-container">{experienceList}</div>
					<LineComponent />
					<FooterComponent />
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Aboutpage;
