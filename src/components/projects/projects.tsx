import "./projects.less";
import { useState } from "react";

function ProjectsComponent() {
  const [isMapoLoaded, setIsMapoLoaded] = useState(false);
  const [isDataPlatformLoaded, setIsDataPlatformLoaded] = useState(false);
  const [isTheoryLoaded, setIsTheoryLoaded] = useState(false);

  return (
    <div className="projects-component-container">
      <a className="project1-container" href="/#Mapo">
        <div className="media-frame">
          {!isMapoLoaded && (
            <div className="media-placeholder" aria-hidden="true">
              <div className="loading-spinner" />
            </div>
          )}
          <video
            className={isMapoLoaded ? "is-loaded" : ""}
            src="/mapo_d.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsMapoLoaded(true)}
            onError={() => setIsMapoLoaded(true)}
          />
        </div>
        <div className="title">Mapo</div>
        <div className="desc">
          Browser-based mind mapping tool, designed to be simple and intuitive.
        </div>
      </a>
      <a className="project2-container" href="/#Data">
        <div className="media-frame data-platform-frame">
          {!isDataPlatformLoaded && (
            <div className="media-placeholder" aria-hidden="true">
              <div className="loading-spinner" />
            </div>
          )}
          <video
            className={isDataPlatformLoaded ? "is-loaded" : ""}
            src="/Data-Engineering-Demo.mov"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsDataPlatformLoaded(true)}
            onError={() => setIsDataPlatformLoaded(true)}
          />
        </div>
        <div className="title">Data Platform</div>
        <div className="desc">
          A small end-to-end data engineering pipeline that simulates a
          real-world production workflow.
        </div>
      </a>
      <a className="project3-container" href="/#Theory">
        <div className="media-frame">
          {!isTheoryLoaded && (
            <div className="media-placeholder" aria-hidden="true">
              <div className="loading-spinner" />
            </div>
          )}
          <img
            className={isTheoryLoaded ? "is-loaded" : ""}
            src="theory-img-1.png"
            alt=""
            onLoad={() => setIsTheoryLoaded(true)}
            onError={() => setIsTheoryLoaded(true)}
          />
        </div>
        <div className="title">Theory</div>
        <div className="desc">
          An e-commerce store for climbing apparel, integrated with the Stripe
          API for secure checkout.
        </div>
      </a>
    </div>
  );
}

export default ProjectsComponent;
