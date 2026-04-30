import "./head-experience.less";

function HeadExperienceComponent() {
  return (
    <div className="experience-component-container">
      <div className="currently">
        <div className="title">Currently -</div>
        <div className="experience">
          Platform Engineer @{" "}
          <a
            className="e-company-link"
            href="https://www.mirion.com"
            target="_blank"
            rel="noreferrer"
          >
            Mirion
          </a>
        </div>
      </div>

      <div className="previously">
        <div className="title">Previously -</div>
        <div className="experience">
          Data Engineer @{" "}
          <a
            className="e-company-link"
            href="https://www.fisherinvestments.com"
            target="_blank"
            rel="noreferrer"
          >
            Fisher Investments
          </a>
        </div>

        <div className="experience">
          Data Engineer Intern @{" "}
          <a
            className="e-company-link"
            href="https://www.fisherinvestments.com"
            target="_blank"
            rel="noreferrer"
          >
            Fisher Investments
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeadExperienceComponent;
