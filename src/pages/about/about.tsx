import FooterComponent from "../../components/footer/footer";
import LineComponent from "../../components/line/line";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./about.less";

type bullets = {
	bullet: string,
};

type bubbles = {
	bubble: string,
};

type experiences = {
	id: number,
	title: string,
	company: string,
	date: string,
	bullets: bullets[],
	bubbles: bubbles[],
};

const experiences = [
	{
		id: 3,
		title: "Junior Associate Application Developer",
		company: "Fisher Investments",
		date: "Aug 2025 - Present",
		bullets: [
			{
				bullet: "Developed Python-based Apache Airflow DAGs as part of a proof of concept to orchestrate data workflows."
			},
			{
				bullet: "Built, maintained, and debugged Azure Data Factory pipelines supporting cash and trading workflows."
			},
		],
		bubbles: [
			{ bubble: "Python" },
			{ bubble: "Apache Airflow" },
			{ bubble: "Azure" },
			{ bubble: "Azure Data Factory" },
			{ bubble: "SQL" },
		]
	},
	{
		id: 2,
		title: "Application Developer Intern",
		company: "Fisher Investments",
		date: "May - Aug 2025",
		bullets: [
			{ bullet: "Developed an observability tool for the Portfolio Management Group supporting $300B+ in AUM, leveraging Splunk and Dynatrace." },
		],
		bubbles: [
			{ bubble: "Splunk" },
			{ bubble: "Dynatrace" },
			{ bubble: "Azure" },
			{ bubble: "Azure Data Factory" },
			{ bubble: "SQL" },
		]
	},
	{
		id: 1,
		title: "Freelance Web Developer",
		date: "Mar 2025",
		bullets: [
			{ bullet: "Built a responsive and SEO-friendly website for a photography student, improving user experience and search visibility." },
		],
		bubbles: [
			{ bubble: "React" },
			{ bubble: "TypeScript" },
			{ bubble: "Figma" },
		]
	},
];

function Aboutpage() {

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	}, []);

	const experienceList = experiences.map((experience) => {
		return (
			<div key={experience.id}>
				<div className="rightleft-container">
					<div className="right">
						<div className="e-title">{experience.title}</div>
					</div>
					<div className="left">
						<div className="e-date">{experience.date}</div>
					</div>

				</div>
				<div className="e-company">{experience.company}</div>
				<div className="e-bullets">
					{experience.bullets.map((item, index) => (
						<li key={index}>{item.bullet}</li>
					))}
				</div>
				<div className="bubbles-container">
					{experience.bubbles.map((bubble, index) => (
						<div key={index} className="green-bubble">
							{bubble.bubble}
						</div>
					))}
				</div>
			</div>
		);
	});

	return (
		<div className="aboutpage-container">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="bg-white p-6 rounded-lg shadow-md"
			>
				<div className="title">About Me</div>
				<LineComponent />
				<div className="content">
					Hello! <br></br> Lately, I’ve been excited to learn more about Neovim and Lua. At work, I’m learning more about cloud technologies, particularly Microsoft Azure and cloud-based infrastructure.
				</div>
				<div className="title-two">Education </div>
				<LineComponent />
				<div className="education-container">
					<div className="rightleft-container">
						<div className="right">
							<div className="e-title">University of North Texas</div>
							<div className="e-company">Bachelor of Science, Computer Science</div>
							<div className="e-minor">Minor in Mathematics</div>
						</div>
						<div className="left">
							<div className="e-date">May 2026</div>
						</div>
					</div>
				</div>
				<div className="title-two">Work Experience</div>
				<LineComponent />
				<div className="experience-container">{experienceList}</div>
				<LineComponent />
				<FooterComponent />
			</motion.div>
		</div>
	);
}
export default Aboutpage;
