import "./Experience.css";

function Experience() {
	return (
		<div id="Experience" className="experience-container">
			<div className="e-title">Experience</div>
			<div className="experience1-container">
				<div className="date">AUG 2025 - PRESENT</div>
				<div className="sub-container">
					<div className="title">Software Engineer ・ Fisher Investments </div>
					<p>
						Excited to join Fisher Investments as an Software Engineer, where
						I’ll dive into hands-on experience in financial technology.
					</p>
					<div className="bubbles">
						<div className="g-bubble">Azure</div>
						<div className="g-bubble">SQL</div>
						<div className="g-bubble">Splunk</div>
						<div className="g-bubble">Dynatrace</div>
					</div>
				</div>
			</div>
			<div className="experience2-container">
				<div className="date">MAY - AUG 2025</div>
				<div className="sub-container">
					<div className="title">
						Software Engineer Intern ・ Fisher Investments{" "}
					</div>
					<p>
						Developed observability and error tracking for systems supporting{" "}
						<span className="white">$300B+ </span>in assets, improving log
						visibility across <span className="white">450+ </span>
						integration pipelines and reducing response times by{" "}
						<span className="white">30% </span>with a centralized Splunk
						dashboard.
					</p>
					<div className="bubbles">
						<div className="g-bubble">Azure</div>
						<div className="g-bubble">SQL</div>
						<div className="g-bubble">Splunk</div>
						<div className="g-bubble">Dynatrace</div>
					</div>
				</div>
			</div>
			<div className="experience3-container">
				<div className="date">MAR 2025</div>
				<div className="sub-container">
					<div className="title-arrow-container">
						<div className="title">Freelance Web Developer</div>
						{/* <a href={"https://jayden-portfolio-pi.vercel.app/"} className="newarrow"></a> */}
					</div>
					<p>
						Designed a custom portfolio site for a photography student with a
						focus on performance, SEO, and client-driven iteration. Integrated
						EmailJS to enable direct, seamless communication through a contact
						form.
					</p>
					<div className="bubbles">
						<div className="g-bubble">React</div>
						<div className="g-bubble">Figma</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Experience;
