import "./Head.less";

function HeadComponent() {
	return (
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
					<div className="title">Hello, I'm Thane</div>
					<div className="description">
						I'm a Application Developer based in Dallas, TX.
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeadComponent;
