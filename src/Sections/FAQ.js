import { useState } from "react";

const faqs = [
  {
    title: "What types of vehicles do you have available for sale?",
    text: "We offer a wide range of vehicles, including new and used cars, trucks, SUVs, and even some specialty vehicles. You can browse our inventory to see the latest options.",
  },
  {
    title: "Do you offer financing options for car purchases?",
    text: "Yes, we provide financing options through our partner lenders. You can apply for financing online, and we'll work to find the best rates and terms for your budget.",
  },
  {
    title: "What information is available about each vehicle in your listings?",
    text: "Our listings include detailed information about each vehicle, including photos, price, mileage, year, make, model, and features. You can also contact the seller for additional details.",
  },
  {
    title: "Are the used cars on your website inspected and certified?",
    text: "Some of our used cars are certified pre-owned (CPO) and have undergone rigorous inspections. You can filter your search to specifically look for CPO vehicles.",
  },
];

export default function FAQ() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="faq-section">
      <p className="p">Answers to Common Questions</p>
      <h2 className="heading-secondary">General FAQs</h2>
      <div className="faq-section-content">
        {faqs.map((el, index) => (
          <FAQItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            text={el.text}
            num={index}
            key={el.title}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`faq-div ${isOpen ? "is-open" : null}`}
      onClick={handleToggle}
    >
      <p className="faq-number">{num < 9 ? `0 ${num + 1}` : num + 1}</p>
      <p className="faq-title">{title}</p>
      <p className="faq-icon">{isOpen ? "-" : "+"}</p>

      {isOpen ? <div className="faq-text">{text}</div> : null}
    </div>
  );
}
