import FooterComponent from "../../components/footer/footer";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import { motion } from "framer-motion";
import "./skills.less";

function Skillspage() {
	return (
		<div className="skillspage-container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>


				<div className="navbar-container">
					<NavBarComponent />
				</div>
				<div className="title">Skills</div>
				<LineComponent />
				<div className="s-title">Languages</div>
				<div className="bubbles-container">
					<div className="blue-bubble">JavaScript</div>
					<div className="blue-bubble">TypeScript</div>
					<div className="blue-bubble">Python</div>
					<div className="blue-bubble">Golang</div>
					<div className="blue-bubble">C#</div>
					<div className="blue-bubble">C++</div>
				</div>
				<LineComponent />
				<div className="s-title">Frontend</div>
				<div className="bubbles-container">
					<div className="green-bubble">React</div>
					<div className="green-bubble">Angular</div>
					<div className="green-bubble">HTML/CSS</div>
				</div>
				<LineComponent />
				<div className="s-title">Backend</div>
				<div className="bubbles-container">
					<div className="purple-bubble">ASP.NET Core</div>
					<div className="purple-bubble">Fast API</div>
					<div className="purple-bubble">Node.js</div>
				</div>
				<LineComponent />
				<div className="s-title">Database</div>
				<div className="bubbles-container">
					<div className="red-bubble">Microsoft SQL Server</div>
					<div className="red-bubble">PostgreSQL</div>
					<div className="red-bubble">SQLite</div>
				</div>
				<LineComponent />
				<div className="s-title">Tools</div>
				<div className="bubbles-container">
					<div className="yellow-bubble">Azure</div>
					<div className="yellow-bubble">AWS</div>
					<div className="yellow-bubble">Docker</div>
					<div className="yellow-bubble">Azure Data Factory</div>
					<div className="yellow-bubble">Apache Airflow</div>
					<div className="yellow-bubble">Splunk</div>
					<div className="yellow-bubble">Dynatrace</div>
				</div>
				<div className="footer-container">
					<LineComponent />
					<FooterComponent />
				</div>
			</motion.div>
		</div>
	);
}

export default Skillspage;
