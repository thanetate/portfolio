import FooterComponent from "../../components/footer/footer";
import LineComponent from "../../components/line/line";
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
			{ bullet: "Developed a foundational understanding of wealth management principles by working within the Portfolio Management Group (PMG) to trace data flows across Front Office (CRD), Middle Office (GWP), and Back Office (Sylvan, Vision) systems." }
		],
		bubbles: [
			{ bubble: "Python" },
			{ bubble: "Azure" },
			{ bubble: "Azure Data Factory" },
			{ bubble: "Microsoft SQL Server" },
			{ bubble: "AutoXLR8" },
		]
	},
	{
		id: 2,
		title: "Application Developer Intern",
		company: "Fisher Investments",
		date: "May - Aug 2025",
		bullets: [
			{ bullet: "Reduced error response times by 30% across various systems supporting $300B+ in assets through a unified Splunk dashboard. " },
			{ bullet: "Built end-to-end observability by integrating 500k+ daily logs from Azure Data Factory (ADF), REST APIs, and Dynatrace." },
			{ bullet: "Assisted in efforts to improve log visibility for 450 + integration pipelines by introducing tracing for nested pipelines." },
		],
		bubbles: [
			{ bubble: "Splunk" },
			{ bubble: "Dynatrace" },
			{ bubble: "Azure Data Factory" },
			{ bubble: "Microsoft SQL Server" },
		]
	},
	{
		id: 1,
		title: "Freelance Web Developer",
		date: "Mar 2025",
		bullets: [
			{ bullet: "Improved user engagement by 30% through developing a fully responsive, image-optimized site for a photography student. " },
			{ bullet: "Boosted organic search traffic by 100+ visits in the first month and improved Google keyword rankings by optimizing for SEO." }
		],
		bubbles: [
			{ bubble: "React" },
			{ bubble: "TypeScript" },
			{ bubble: "Figma" },
		]
	},
];

function Aboutpage() {

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
					Hello! <br></br> Lately, I’ve been excited to learn more about Neovim and Lua. At work, I’m learning more about Microsoft Azure and how front-, middle-, and back-office systems operate in the finance space.
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
