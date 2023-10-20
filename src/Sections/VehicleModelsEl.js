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
              <div className="add-to-cart-div">Add to cart</div>
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
              <p>Model</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.model : null}</p>
            </div>
            <div className="specs">
              <p>Price</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.price : null}</p>
            </div>
            <div className="specs">
              <p>Fuel Economy</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.fuelEconomy : null}</p>
            </div>
            <div className="specs">
              <p>Motor</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.motor : null}</p>
            </div>
            <div className="specs">
              <p>Transmission</p>
              <div className="border"></div>
              <p>{selectedCar ? selectedCar.transmission : null}</p>
            </div>
            <div className="specs">
              <p>Space</p>
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
