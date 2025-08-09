import "./Current.css";

function Current() {
	return (
		<div className="current-container">
			<div className="current-box">
				<div className="current-title">CURRENTLY</div>
				<div className="current-company">Fisher Investments</div>
				<div className="current-pos">Software Engineer</div>
			</div>

                <div className="current-title">PREVIOUSLY</div>
            <div className="previous-box">
				<div className="previous-single-box">
				<div className="current-company">Fisher Investments</div>
				<div className="current-pos">Software Engineer Intern</div>
				</div>
				<div className="previous-single-box">
				<div className="current-company">Freelance</div>
				<div className="current-pos">Web Developer</div>
				</div>
            </div>
		</div>
	);
}
export default Current;
