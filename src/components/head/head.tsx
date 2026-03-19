import "./head.less";
import "remixicon/fonts/remixicon.css";

function HeadComponent() {
  return (
    <div className="head-component-container">
      <div className="head-content">
        <div className="title">Thane Tate</div>
        <div className="description-line">
          A recent grad with a degree in Computer Science.
        </div>
        <div className="location-line">
          <i className="ri-map-pin-add-fill"></i>
          <span>Dallas, TX</span>
        </div>
      </div>
    </div>
  );
}

export default HeadComponent;
