import "./Head.less";

function HeadComponent() {
	return (
		<>
			<div className="head-component-container">
				<div className="hc-leftright-container">
					<div className="left">
						<img
							className="profile"
							src="/profile3.png"
							alt="Profile Picture"
							width="100px"
							height="100px"
						/>
					</div>
					<div className="right">
						<div className="title">Hi, I'm Thane Tate</div>
						<div className="description">
							I am a Software Developer based in Dallas, TX.
						</div>
					</div>
				</div>
				{/* <div className="scroll">
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
				<div className="version">v3.3.2</div> */}
			</div>
		</>
	);
}

export default HeadComponent;
