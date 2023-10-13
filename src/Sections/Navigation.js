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
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="nav-btn-div">
        <button className="nav-btn sign-in-btn">Sign In</button>
        <button className="nav-btn register-btn">Register</button>
      </div>
    </div>
  );
}
