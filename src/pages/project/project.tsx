import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import "./project.less";

function Projectpage () {
    return (
        <div className="projectpage-container">
            <div className="navbar-container">
				<NavBarComponent />
			</div>
            <div className="s-title">Project Details</div>
            <div className="title">Mapo</div>
            <LineComponent/>
        </div>
    )
}

export default Projectpage;