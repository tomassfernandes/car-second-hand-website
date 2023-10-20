import Navigation from "./Navigation";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header">
      <Navigation />
      <div className="cta-grid">
        <div className="cta-text-div">
          <p className="cta-p1">Find the perfect car for you</p>
          <h1 className="cta-h1">
            Second hand cars at the <span>best</span> price!
          </h1>
          <p className="cta-p2">
            Take the wheel and let your aspirations drive you. Explore our
            inventory now and find the car that will ignite your passion for the
            road
          </p>
          <div className="cta-btn-div">
            <button className="cta-btn drive-test-btn">
              <p>Test Drive</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-zap"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </button>

            <Link
              to="section-vehicle-models"
              spy={true}
              smooth={true}
              duration={500}
              offset={30}
            >
              <button className="cta-btn learn-more-btn">
                <p>Browse Cars</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-down"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="cta-car-div">
          <img className="cta-car-img" src="/img/cta-car.webp" alt="Car" />
        </div>
      </div>
    </header>
  );
}
