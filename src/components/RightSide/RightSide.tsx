// import About from "../About/About";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import { Education } from "../Education/Education";
import "./RightSide.css";

function RightSide() {
	return (
		<div className="right-container">
			{/* <About /> */}
			<Skills />
			<Education />
			<Experience />
			<Projects />
			<Footer />
		</div>
	);
}

export default RightSide;
