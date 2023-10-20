import AboutEl from "./AboutEl";
import { Element } from "react-scroll";

export default function SectionAbout() {
  return (
    <Element name="section-about">
      <section className="section-about">
        <div className="about-text">
          <h2 className="heading-secondary">Buy easier with us</h2>
          <p>
            We're passionate about connecting buyers with their dream vehicles
            while providing a seamless and trustworthy car shopping experience.
            We believe in offering an extensive selection of well-maintained
            vehicles, providing the information you need to make an informed
            decision, and delivering exceptional service from start to finish.
          </p>
        </div>
        <AboutEl />
      </section>
    </Element>
  );
}
