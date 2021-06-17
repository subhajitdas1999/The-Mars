import React from "react";
import "./Ingenuity.css";
import video from "./mars_heli.mp4";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import Footer from "./Footer";

var items = [
  {
    name: "First test of powered flight on another planet.",
    description: "Ingenuity, successfully performed the first controlled powered flight of an aircraft on a planet other than Earth",
  },
  {
    name: "Built to be light and strong",
    description:
      "enough to stow away under the rover while on the way to Mars, and survive the harsh Martian environment after arriving on the surface. The helicopter weighs less than 4 pounds (1.8 kilograms).",
  },
  {
    name: "Powerful enough to lift off in the thin Mars atmosphere.",
    description:
      "The atmosphere of Mars is very thin: less than 1% the density of Earth's.",
  },
  {
    name: "The helicopter was designed to fly for up to 90 seconds.",
    description:
      "to distances of almost 980 feet (300 meters) at a time and about 10 to 15 feet from the ground. That's no small feat compared to the first 12-second flight of the Wright Brothers' airplane.",
  },
  {
    name: "The helicopter flies on its own, without human control.",
    description:
      "It must take off, fly, and land, with minimal commands from Earth sent in advance.",
  },
];

function Ingenuity() {
  return (
    <div className="ingenuity">
      <div className="ingenuity__video">
        <video src={video} loop muted autoPlay></video>
      </div>
      <div className="ingenuity__techDetails">
        <div className="ingenuity__about">
          <div className="heading__animation">
            <h1 className="ingenuity__about__heading">
              Know Ingenuity more . . .
            </h1>
          </div>
          <div className="ingenuity__aboutContainer">
            <div className="about__img">
              <img
                src="https://mars.nasa.gov/layout/helicopter/images/Mars_Helicopter-web.png"
                alt=""
              />
            </div>

            <div className="about__details">
              <table>
                <tr>
                  <th>Mass</th>
                  <td>1.8 kilograms</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>4 pounds on Earth; 1.5 pounds on Mars</td>
                </tr>
                <tr>
                  <th>Width</th>
                  <td>
                    Total length of rotors: ~4 feet (~1.2 meters) tip to tip
                  </td>
                </tr>
                <tr>
                  <th>Blade span</th>
                  <td>Just under 4 feet (1.2 meters)</td>
                </tr>
                <tr>
                  <th>Flight range</th>
                  <td>Up to 980 feet (300 meters)</td>
                </tr>
                <tr>
                  <th>Flight altitude</th>
                  <td>Up to 15 feet (5 meters)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="ingenuity__carasoul">
        <Carousel interval="4000">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Ingenuity;
