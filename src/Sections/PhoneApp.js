export default function PhoneApp() {
  return (
    <section className="section-phone-app">
      <div className="phone-app-div">
        <div className="phone-app-text-div">
          <h2>Download the free Car Saver app</h2>
          <p>It was never so easy to buy a car!</p>
          <div className="apps-div">
            <div className="app">
              <img
                className="app-logo"
                src="/svg/google-play.png"
                alt="Google Play logo"
              />
              <div className="app-text">
                <h3>Google Play</h3>
                <p className="app-p">Get now for free!</p>
              </div>
            </div>
            <div className="app">
              <img
                className="app-logo"
                src="/svg/apple-store.png"
                alt="Apple logo"
              />
              <div className="app-text">
                <h3>Apple Store</h3>
                <p className="app-p">Get now for free!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="app-img"
        src="/img/app-img.webp"
        alt="A phone with the site's app"
      />
    </section>
  );
}
