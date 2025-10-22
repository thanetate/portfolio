import LineComponent from "../line/line";
import "./Footer.less";
function FooterComponent() {
	return (
		<div className="footer-component-container">
			<LineComponent />
			<div className="text">Designed and developed by Thane Tate.</div>
			<div className="leftright-container">
				<div className="links-container">
					<a href="https://linkedin.com/in/thanetate">LinkedIn</a>
					<a href="https://github.com/thanetate">Github</a>
					<a href="mailto:thaneallantate@gmail.com">Email</a>
				</div>
				<div className="version-container">
					<div className="version">v4.0.0</div>
				</div>
			</div>
		</div>
	);
}
export default FooterComponent;
