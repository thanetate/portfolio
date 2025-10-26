import { useParams } from "react-router-dom";
import LineComponent from "../../components/line/line";
import NavBarComponent from "../../components/navbar/navbar";
import "./project.less";

function Projectpage () {
    const { projectname } = useParams();
    const projecttitle = projectname ? projectname.charAt(0).toUpperCase() + projectname.slice(1) : "";
    return (
        <div className="projectpage-container">
            <div className="navbar-container">
				<NavBarComponent />
			</div>
            <div className="s-title">Project Details</div>
            <div className="title">{projecttitle}</div>
            <LineComponent/>
        </div>
    )
}

export default Projectpage;