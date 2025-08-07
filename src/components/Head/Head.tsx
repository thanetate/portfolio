// import Icons from "../Icons/Icons";
import "./Head.css";

export default function Head() {
	return (
		<>
			<div className="head-container">
				<div className="small-head-container">
				<div className="leftside">

				<img
					className="profile"
					src="/profile3.png"
					alt="Profile Picture"
					width="150px"
					height="150px"
					/>
				</div>
				<div className="rightside">
					<div className="intro-title">Hi, I'm Thane Tate ツ</div>
					<div className="intro-desc">I'm a Software Engineer interested in the intersection between finance and technology.</div>
				</div>
				</div>
				{/* <div className="name">Thane Tate</div>
				<div className="fullstack">I am a Software Engineer ツ</div>
				<div className="location">📍 Dallas, Texas</div>
				<p>Eager to Expand My Skills in Full-Stack Development</p> */}
				{/* <Icons /> */}
				<div className="scroll">
					<div className="group">
						<a className="about" href="#About">
							<div className="newscroll"></div>
							<span>ABOUT</span>
						</a>
					</div>
					<div className="group">
						<a className="experience" href="#Education">
							<div className="newscroll"></div>
							<span>EDUCATION</span>
						</a>
					</div>
					<div className="group">
						<a className="experience" href="#Experience">
							<div className="newscroll"></div>
							<span>EXPERIENCE</span>
						</a>
					</div>
					<div className="group">
						<a className="projects" href="#Projects">
							<div className="newscroll"></div>
							<span>PROJECTS</span>
						</a>
					</div>
				</div>
				<div className="version">v3.3.2</div>
			</div>
		</>
	);
}
