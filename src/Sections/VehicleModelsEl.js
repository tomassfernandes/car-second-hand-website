import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { FadeLoader } from "react-spinners";

export default function VehicleModelsEl() {
  const cars = [
    {
      brand: "Velocity",
      model: "Thunderstrike",
      price: "39,000€",
      fuelEconomy: "11.2 km/l",
      motor: "Turbocharged V6",
      transmission: "8-Speed Automatic",
      space: "5",
      img: "/img/car-1.webp",
    },
    {
      brand: "Quantum",
      model: "Nebula Cruiser",
      price: "$33,300€",
      fuelEconomy: "13.2 km/l",
      motor: "Electric Drive",
      transmission: "Single-Speed Automatic",
      space: "4",
      img: "/img/car-2.webp",
    },
    {
      brand: "AetherDrive",
      model: "Solarion X",
      price: "$48,400€",
      fuelEconomy: "10.2 km/l",
      motor: "Hybrid Powertrain",
      transmission: "7-Speed Dual-Clutch",
      space: "5",
      img: "/img/car-3.webp",
    },
    {
      brand: "AeroMax",
      model: "Skyblazer Pro",
      price: "36,500€",
      fuelEconomy: "12.3 km/l",
      motor: " Inline-4 Turbo",
      transmission: "6-Speed Manual",
      space: "5",
      img: "/img/car-4.webp",
    },
    {
      brand: "Titan",
      model: "Horizon Voyager",
      price: "$41,900€",
      fuelEconomy: "10.9 km/l",
      motor: "V8 Engine",
      transmission: "10-Speed Automatic",
      space: "2",
      img: "/img/car-8.webp",
    },
  ];

  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function selectionClick(index) {
    setIsLoading(true);
    setSelectedCarIndex(index);
  }

  const selectedCar = cars[selectedCarIndex];

  useEffect(() => {
    if (selectedCar) {
      const img = new Image();
      img.src = selectedCar.img;
      img.onload = () => {
        setIsLoading(false);
      };
    }
  }, [selectedCar]);

  return (
    <Element name="section-vehicle-models">
      <section className="vehicle-section">
        <p className="p">Choose the car that fits you</p>
        <h2 className="heading-secondary">Vehicle Models</h2>
        <div className="vehicle-gird">
          <div className="select-vehicle-div">
            <h3>Choose car:</h3>
            <div className="choose-car-div">
              {cars.map((car, index) => (
                <div
                  key={index}
                  className={`${
                    selectedCarIndex === index ? "car-selected" : "car-div"
                  }`}
                  onClick={() => selectionClick(index)}
                >
                  {car.brand}
                </div>
              ))}
              <div className="add-to-cart-div">
                Contact Seller
                <svg
                  svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="vehicle-img-div">
            {isLoading ? (
              <FadeLoader size={50} color={"#dd3939"} loading={isLoading} />
            ) : (
              <img
                className="vehicle-img"
                src={selectedCar ? selectedCar.img : null}
                alt="Selected car"
              />
            )}
          </div>
          <div className="vehcile-specs-div">
            <div className="specs">
              <p className="specs-bold">Model</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.model : null}</p>
            </div>
            <div className="specs">
              <p className="specs-bold">Price</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.price : null}</p>
            </div>
            <div className="specs">
              <p className="specs-bold">Fuel Economy</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.fuelEconomy : null}</p>
            </div>
            <div className="specs">
              <p className="specs-bold">Motor</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.motor : null}</p>
            </div>
            <div className="specs">
              <p className="specs-bold">Transmission</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.transmission : null}</p>
            </div>
            <div className="specs">
              <p className="specs-bold">Space</p>
              <div className="border"></div>
              <p>
                {selectedCar ? selectedCar.space : null}
                <span>
                  <img src="/svg/person.png" alt="person icon" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
