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
        <div className="shopping-cart-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#343434"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
