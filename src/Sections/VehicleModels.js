export default function VehicleModels() {
  return (
    <section className="vehicle-section">
      <h2>Ald,wld,wldld,w</h2>
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
            src="/img/cta-car.webp"
            alt="Selected car"
          />
        </div>
        <div className="vehcile-specs-div">
          <div className="specs">BMW</div>
          <div className="specs">Price</div>
          <div className="specs">Fuel Economy</div>
          <div className="specs">Motor</div>
          <div className="specs">Transmission</div>
          <div className="specs">Space</div>
        </div>
      </div>
    </section>
  );
}
