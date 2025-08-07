import "./Projects.css";

const projects = [
	{
		demo: "/mapodemo.png",
		title: "Mapo",
		github: "https://github.com/bensivo/mapo",
		site: "https://mapo.ink/app/",
		desc: (
			<>
			Mapo is a browser-based mind mapping tool, designed to be simple and intuitive. 
			</>
			// <>
			// 	Contributed to a browser-based mind mapping tool by: Implemented{" "}
			// 	<span className="white">touch features</span> for a seamless mobile and
			// 	tablet experience. Developed a{" "}
			// 	<span className="white">folder management feature</span> to help users
			// 	organize files efficiently. Created a{" "}
			// 	<span className="white">comment feature</span> that enables users to add
			// 	text annotations directly onto the canvas.
			// </>
		),
		bubbles: ["Angular", "Golang", "PostgreSQL", "Docker", "OpenTelemetry"],
	},
	{
		demo: "/theorydemo.png",
		title: "Theory Climbing",
		github: "https://github.com/thanetate/Theory-v2",
		site: "https://www.theoryclimbing.com/",
		desc: (
			<>
				Theory Climbing is an <span className="white">e-commerce</span> web
				application I built to sell climbing apparel. Featuring secure
				authentication via <span className="white">Supabase Auth</span> and a
				secure checkout session using the{" "}
				<span className="white">Stripe API, </span>
				this site ensures a safe and user-friendly shopping experience.
			</>
		),
		bubbles: ["React", "ASP.NET Core", "PostgreSQL", "Azure"],
	},
	{
		demo: "/readingrealm.png",
		title: "Reading Realm",
		github: "https://github.com/ksheahen/Reading-Realm",
		desc: (
			<>
				Reading Realm is a platform for book lovers to track their reading,
				share reviews, and set goals with the help of the{" "}
				<span className="white">Google Books API.</span> It features secure
				authentication using <span className="white">JWT</span> and delivers a
				user-focused experience shaped by customer feedback.
			</>
		),
		bubbles: ["React", "Node.js", "Express.js", "MongoDB"],
	},
	// {
	// 	demo: "/libraryloandemo.png",
	// 	title: "Library System",
	// 	github: "https://github.com/thanetate/Library-Management-System",
	// 	desc: (
	// 		<>
	// 			Library Loan Management System is a software solution I developed to
	// 			streamline the organization of library loans, patrons, and books. Built
	// 			with <span className="white">Object-Oriented Programming</span>{" "}
	// 			principles and automated using a Makefile, it simplifies library
	// 			operations and demonstrates my ability to design efficient, real-world
	// 			solutions.
	// 		</>
	// 	),
	// 	bubbles: ["C++", "Makefile"],
	// },
];

function Projects() {
	return (
		<div id="Projects" className="projects-container">
			{/* <div className="p-title">Projects</div> */}
			{projects.map((project, index) => (
				<a key={index} className={`project${index + 1}-container`}>
					<img src={`${project.demo}`} alt="Demo" className="demo" />
					<div className="sub-container">
						<div className="title">{project.title}</div>
						{project.site && (
							<a href={`${project.site}`} className="newarrow"></a>
						)}
						<a href={`${project.github}`} className="exportgithub"></a>
						<p>{project.desc}</p>
						<div className="bubbles">
							{project.bubbles.map((bubble, j) => (
								<div key={j} className="g-bubble">
									{bubble}
								</div>
							))}
						</div>
					</div>
				</a>
			))}
		</div>
	);
}

export default Projects;
