import { Link } from "react-scroll";
import { useRef } from "react";

export default function Navigation() {
  const navRef = useRef();

  function showNavBar() {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="navigation">
      <img className="logo" src="/img/logo.jpg" alt="Company Logo"></img>
      <nav ref={navRef}>
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

          <button onClick={showNavBar} className="nav-btn-menu nav-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </ul>
      </nav>

      <div className="nav-btn-div">
        <button className="nav-btn sign-in-btn">Sign In</button>
        <button className="nav-btn register-btn">Register</button>
      </div>
      <button className="nav-btn-menu " onClick={showNavBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M80 160h352M80 256h352M80 352h352"
          />
        </svg>
      </button>
    </div>
  );
}
