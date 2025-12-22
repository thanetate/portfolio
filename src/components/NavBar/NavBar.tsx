import "./navbar.less"
import 'remixicon/fonts/remixicon.css';

function NavBarComponent() {
	return (
		<>
			<div className="navbar-component-container">
				<a href="/">
					Work
				</a>
				<a href="/about">
					About
				</a>
				<a href="/skills">
					Skills
				</a>
			</div>
			<div className="navbar-component-container2">
				<a href="/#">
					<i className="ri-arrow-right-s-line"></i>
					Work
				</a>
				<a href="/#About">
					<i className="ri-arrow-right-s-line"></i>
					About
				</a>
				<a href="/#Skills">
					<i className="ri-arrow-right-s-line"></i>
					Skills
				</a>
			</div>
		</>
	)
}
export default NavBarComponent;
