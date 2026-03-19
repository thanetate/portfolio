import "remixicon/fonts/remixicon.css";
import "./navbar.less";

function NavBarComponent() {
  return (
    <div className="navbar-component-container">
      <a href="/#" className="brand-link">
        thanetate.dev
      </a>
      <div className="nav-links">
        <a href="/#">
          <i className="ri-arrow-right-s-line"></i>
          Home
        </a>
        <a href="/#About">
          <i className="ri-arrow-right-s-line"></i>
          About
        </a>
      </div>
    </div>
  );
}
export default NavBarComponent;
