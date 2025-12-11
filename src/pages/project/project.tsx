import { useParams } from "react-router-dom";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import { motion } from "framer-motion";
import "./project.less";
import 'remixicon/fonts/remixicon.css';
import FooterComponent from "../../components/footer/footer";

function Projectpage() {
	const { projectname } = useParams();

	type Skill = {
		bubble: string,
	};

	type Demo = {
		image: string,
	};

	type Project = {
		paramname: string,
		name: string,
		description1: string,
		description2: string,
		image: Demo[],
		demo: string,
		skills: Skill[],
		team: string,
		github: string,
		live: string,
	};

	const projects: Project[] = [
		{
			paramname: "mapo",
			name: "Mapo",
			description1: "Mapo is a lightweight, browser-based mind mapping tool built for simplicity and ease of use.",
			description2: "Mind mapping is a technique used to help visually develop and organize ideas. They are most commonly used for note taking, brainstorming ideas, and project planning. By mapping ideas visually, we can break down and retain information better.",
			skills: [
				{ bubble: "Angular" },
				{ bubble: "Golang" },
				{ bubble: "PostgreSQL" },
				{ bubble: "Linode" },
				{ bubble: "Docker" },
			],
			team: "Ben Sivorivong",
			github: "https://github.com/bensivo/mapo",
			live: "https://mapo.ink/app/",
			demo: "/mapo-demo-fast.mov",
			image: [
				{ image: "/mapo_pic1.png" },
				{ image: "/mapo-homepage.png" },
			],
		},
		{
			paramname: "theory",
			name: "theory",
			description1: "",
			description2: "",
			skills: [
				{ bubble: "typescript" },
				{ bubble: "typescript" },
				{ bubble: "typescript" }
			],
			team: "ben sivo",
			github: "ben sivo",
			live: "ben sivo",
			demo: "/mapo_d.mp4",
			image: [
				{ image: "" },
			],

		},
	];

	const currentProject = projects.find(
		(object) => object.paramname.toLowerCase() === projectname?.toLowerCase()
	);

	return (
		<div className="projectpage-container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>

				<div className="navbar-container">
					<NavBarComponent />
				</div>
				<div className="s-title">Project Details</div>
				<div className="title">{currentProject?.name}</div>
				<LineComponent />

				{currentProject ? (
					<div className="project-info">
						<div className="description1">{currentProject.description1}</div>
						<div className="description2">{currentProject.description2}</div>
						<div className="box-container">
							<LineComponent />
							<div className="skills-container">
								<div className="tech">Tech</div>
								<div className="bubbles-container">
									{currentProject.skills.map((skill: Skill, index: number) => (
										<div key={index} className="green-bubble">
											{skill.bubble}
										</div>
									))}
								</div>
							</div>
							<LineComponent />
							<div className="block-container">
								<div className="block-title">Team</div>
								<div className="block-info">{currentProject?.team}</div>
							</div>
							<LineComponent />
							<div className="block-container">
								<div className="block-title">Github</div>
								<div className="block-info">
									{/* target _blank opens a new tab, rel noopener is for security best practices	 */}
									<a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="link-a">View
										<i className="ri-arrow-right-line"></i>
									</a>
								</div>
							</div>
							<LineComponent />
							<div className="block-container">
								<div className="block-title">Live Project</div>
								<div className="block-info">
									{/* target _blank opens a new tab, rel noopener is for security best practices	 */}
									<a href={currentProject.live} target="_blank" rel="noopener noreferrer" className="link-a">View
										<i className="ri-arrow-right-line"></i>
									</a>
								</div>

							</div>
							<LineComponent />
							<video
								src={currentProject?.demo}
								autoPlay
								loop
								muted
								playsInline
								className="demo"
							/>
							<div className="demo-image-container">
								{currentProject.image.map((image: Demo, index: number) => (
									<div key={index} >
										<img src={image.image} className="demo-image"></img>
									</div>
								))}
							</div>
							<LineComponent />
							<FooterComponent />
						</div>
					</div>
				) : (
					<p>Project not found.</p>
				)
				}
				{/* <FooterComponent /> */}
			</motion.div >
		</div >
	)
}

export default Projectpage;
