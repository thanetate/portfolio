import "./head.less";

function HeadComponent() {
  return (
    <div className="head-component-container">
      <div className="hc-leftright-container">
        <div className="left">
          <div className="profile-frame">
            <img
              className="profile"
              src="/ThaneHeadshot.PNG"
              alt="Profile Picture"
            />
          </div>
        </div>
        <div className="right">
          <div className="title">Hi, I'm Thane Tate</div>
          <div className="description">
            I am a Application Developer based in Dallas, TX.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadComponent;
