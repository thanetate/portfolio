import LineComponent from "../line/line";
import "./Footer.less";
function FooterComponent() {
	return (
		<div className="footer-component-container">
			<LineComponent />
			<div className="text">Designed and developed by Thane Tate.</div>
			<div className="leftright-container">
				<div className="links-container">
					<a>LinkedIn</a>
					<a>Github</a>
					<a>Email</a>
				</div>
				<div className="version-container">
					<div className="version">v4.0.0</div>
				</div>
			</div>
		</div>
	);
}
export default FooterComponent;
