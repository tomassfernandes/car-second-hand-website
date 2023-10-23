import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <div className="navigation">
      <img className="logo" src="/img/logo.jpg" alt="Company Logo"></img>
      <ul className="nav-ul">
        <li>
          <Link to="section-about" spy={true} smooth={true} duration={500}>
            <a href="section-about">About</a>
          </Link>
        </li>
        <li>
          <Link
            to="section-vehicle-models"
            spy={true}
            smooth={true}
            duration={500}
            offset={30}
          >
            <a href="section-vehicle-models">Vehicle Models</a>
          </Link>
        </li>
        <li>
          <Link
            to="section-testimonials"
            spy={true}
            smooth={true}
            duration={500}
          >
            <a href="section-testimonials">Testimonials</a>
          </Link>
        </li>
        <li>
          <Link to="section-contact" spy={true} smooth={true} duration={500}>
            <a href="section-contact">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="nav-btn-div">
        <button className="nav-btn sign-in-btn">Sign In</button>
        <button className="nav-btn register-btn">Register</button>
      </div>
    </div>
  );
}
