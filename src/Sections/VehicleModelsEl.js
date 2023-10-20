import { useState } from "react";
import { Element } from "react-scroll";

export default function VehicleModelsEl() {
  const car1 = {
    brand: "Velocity",
    model: "Thunderstrike",
    price: "39,000€",
    fuelEconomy: "11.2 km/l (City) / 14.9 km/l (Highway)",
    motor: "Turbocharged V6",
    transmission: "8-Speed Automatic",
    space: "2",
    img: "/img/car-1.webp",
  };

  const car2 = {
    brand: "Quantum",
    model: "Nebula Cruiser",
    price: "$33,300€",
    fuelEconomy: "13.2 km/l (City) / 15.8 km/l (Highway)",
    motor: "Electric Drive",
    transmission: "Single-Speed Automatic",
    space: "2",
    img: "/img/car-2.webp",
  };

  const car3 = {
    brand: "AetherDrive",
    model: "Solarion X",
    price: "$48,400€",
    fuelEconomy: "10.2 km/l (City) / 12.8 km/l (Highway)",
    motor: "Hybrid Powertrain",
    transmission: "7-Speed Dual-Clutch",
    space: "5",
    img: "/img/car-3.webp",
  };

  const car4 = {
    brand: "AeroMax",
    model: "Skyblazer Pro",
    price: "36,500€",
    fuelEconomy: "12.3 km/l (City) / 13.9 km/l (Highway)",
    motor: " Inline-4 Turbo",
    transmission: "6-Speed Manual",
    space: "2",
    img: "/img/car-4.webp",
  };

  const car5 = {
    brand: "Titan",
    model: "Horizon Voyager",
    price: "$41,900€",
    fuelEconomy: "10.9 km/l (City) / 13.3 km/l (Highway)",
    motor: "V8 Engine",
    transmission: "10-Speed Automatic",
    space: "4",
    img: "/img/car-8.webp",
  };

  const [isSelected, setIsSelected] = useState(false);

  const [selectedCar, setSelectedCar] = useState(car1);

  function selectionClick(carDetails) {
    setIsSelected(true);
    setSelectedCar(carDetails);
  }

  return (
    <Element name="section-vehicle-models">
      <section className="vehicle-section">
        <p className="p">Choose the car that fits you</p>
        <h2 className="heading-secondary">Vehicle Models</h2>
        <div className="vehicle-gird">
          <div className="select-vehicle-div">
            <h3>Choose car:</h3>
            <div className="choose-car-div">
              <div className="car-div" onClick={() => selectionClick(car1)}>
                {car1.brand}
              </div>
              <div className="car-div" onClick={() => selectionClick(car2)}>
                {car2.brand}
              </div>
              <div className="car-div" onClick={() => selectionClick(car3)}>
                {car3.brand}
              </div>
              <div className="car-div" onClick={() => selectionClick(car4)}>
                {car4.brand}
              </div>
              <div className="car-div" onClick={() => selectionClick(car5)}>
                {car5.brand}
              </div>
              <div className="add-to-cart-div">Add to cart</div>
            </div>
          </div>
          <div className="vehicle-img-div">
            <img
              className="vehicle-img"
              src={selectedCar ? selectedCar.img : null}
              alt="Selected car"
            />
          </div>
          <div className="vehcile-specs-div">
            <div className="specs">
              <p>{selectedCar ? selectedCar.model : null}</p>
              <div className="border"></div>
            </div>
            <div className="specs">
              <p>{selectedCar ? selectedCar.price : null}</p>
              <div className="border"></div>
            </div>
            <div className="specs">
              <p>{selectedCar ? selectedCar.fuelEconomy : null}</p>
              <div className="border"></div>
            </div>
            <div className="specs">
              <p>{selectedCar ? selectedCar.motor : null}</p>
              <div className="border"></div>
            </div>
            <div className="specs">
              <p>{selectedCar ? selectedCar.transmission : null}</p>
              <div className="border"></div>
            </div>
            <div className="specs">
              <p>{selectedCar ? selectedCar.space : null}</p>
              <div className="border"></div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
