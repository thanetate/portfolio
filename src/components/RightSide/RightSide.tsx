// import About from "../About/About";
// import Experience from "../Experience/Experience";
// import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
// import { Education } from "../Education/Education";
import "./RightSide.css";
import Current from "../Current/Current";

function RightSide() {
	return (
		<div className="right-container">
			{/* <About /> */}
			<Current />
			<Projects />
			{/* <Skills /> */}
			{/* <Education /> */}
			{/* <Experience /> */}
			<Footer />
		</div>
	);
}

export default RightSide;
