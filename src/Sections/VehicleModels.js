export default function VehicleModels() {
  return (
    <section className="vehicle-section">
      <h2 className="heading-secondary">Vehicle Models</h2>
      <div className="vehicle-gird">
        <div className="select-vehicle-div">
          <h3>Choose car:</h3>
          <div className="choose-car-div">
            <div className="car-div">BMW</div>
            <div className="car-div">Mercedes</div>
            <div className="car-div">Ferrari</div>
            <div className="car-div">Renault</div>
            <div className="car-div">Mini</div>
          </div>
        </div>
        <div className="vehicle-img-div">
          <img
            className="vehicle-img"
            src="/img/car-8.webp"
            alt="Selected car"
          />
        </div>
        <div className="vehcile-specs-div">
          <div className="specs">
            <p>BMW</p>
            <div className="border"></div>
          </div>
          <div className="specs">
            <p>Price</p>
            <div className="border"></div>
          </div>
          <div className="specs">
            <p>Fuel Economy</p>
            <div className="border"></div>
          </div>
          <div className="specs">
            <p>Motor</p>
            <div className="border"></div>
          </div>
          <div className="specs">
            <p>Transmission</p>
            <div className="border"></div>
          </div>
          <div className="specs">
            <p>Space</p>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
