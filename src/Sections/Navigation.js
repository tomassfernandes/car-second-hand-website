export default function Navigation() {
  return (
    <div className="navigation">
      <img className="logo" src="/img/logo.jpg" alt="Company Logo"></img>
      <ul className="nav-ul">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Vehicle Models</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
