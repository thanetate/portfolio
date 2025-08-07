import "./Skills.css";

function Skills() {
	return (
		<div id="Skills" className="skills-container">
			<div className="sub-containers">
				<div className="title">Languages</div>
				<div className="bubbles">
					<div className="b-bubble">JavaScript</div>
					<div className="b-bubble">TypeScript</div>
					<div className="b-bubble">C#</div>
					<div className="b-bubble">C++</div>
					<div className="b-bubble">Go</div>
					<div className="b-bubble">HTML / CSS</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Frontend</div>
				<div className="bubbles">
					<div className="g-bubble">React</div>
					<div className="g-bubble">Angular</div>

				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Backend</div>
				<div className="bubbles">
					<div className="p-bubble">ASP.NET Core</div>
					<div className="p-bubble">Node.js</div>
					<div className="p-bubble">Express.js</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Database</div>
				<div className="bubbles">
					<div className="r-bubble">SQL</div>
					<div className="r-bubble">PostgreSQL</div>
                    <div className="r-bubble">MongoDB</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Tools</div>
				<div className="bubbles">
					<div className="y-bubble">Git</div>
					<div className="y-bubble">Azure</div>
					<div className="y-bubble">AWS</div>
					<div className="y-bubble">Splunk</div>
					<div className="y-bubble">Dynatrace</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
