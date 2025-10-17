import NavBarComponent from "../../components/NavBar/NavBar";
import Head from "../../components/Head/Head";
// import RightSide from "../../components/RightSide/RightSide";
import { motion } from "framer-motion";
import "./home.less";

function Homepage() {
	return (
		<div className="homepage-container">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.3 }}
			>
				<div className="leftright-container">
					<div className="navbar-container">
						<NavBarComponent />
					</div>
					<div className="head-container">
						<Head />
					</div>
					{/* <div className="rightside-container">
						<RightSide />
					</div> */}
				</div>
			</motion.div>
		</div>
	);
}

export default Homepage;
