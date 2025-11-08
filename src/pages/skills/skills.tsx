import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import "./skills.less";

function Skillspage() {
	return (
		<div className="skillspage-container">
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
				<div className="red-bubble">SQL</div>
				<div className="red-bubble">SQL Server</div>
				<div className="red-bubble">PostgreSQL</div>
				<div className="red-bubble">SQLite</div>
			</div>
			<LineComponent />
			<div className="s-title">Tools</div>
			<div className="bubbles-container">
				<div className="yellow-bubble">Azure</div>
				<div className="yellow-bubble">AWS</div>
				<div className="yellow-bubble">Git</div>
				<div className="yellow-bubble">Docker</div>
				<div className="yellow-bubble">SSMS</div>
				<div className="yellow-bubble">Azure Data Factory</div>
				<div className="yellow-bubble">Apache Airflow</div>
				<div className="yellow-bubble">Splunk</div>
				<div className="yellow-bubble">Dynatrace</div>
			</div>
		</div>
	);
}

export default Skillspage;
