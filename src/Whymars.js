import React, { useEffect } from "react";
import "./Whymars.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
function Whymars() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="whymars">
      <div className="whymars_body">

     
      <div className="whymars__details">
        <h1 className="whymars__details__heading all_heading">SO WHY MARS</h1>
        <p className="whymars__details__para all_para">
          At an average distance of 140 million miles, Mars is one of Earth's
          closest habitable neighbors. Mars is about half again as far from the
          Sun as Earth is, so it still has decent sunlight. It is a little cold,
          but we can warm it up. Its atmosphere is primarily CO2 with some
          nitrogen and argon and a few other trace elements, which means that we
          can grow plants on Mars just by compressing the atmosphere. Gravity on
          Mars is about 38% of that of Earth, so you would be able to lift heavy
          things and bound around. Furthermore, the day is remarkably close to
          that of Earth.
        </p>
      </div>

      <div className="whymars__marshas right_div">
        <h1 className="whymars__marshas__heading all_heading">MARS HAS</h1>

        <div className="whymars__marshas__details all_para">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="has__props"
          >
            <h4>Diameter</h4>
            <p>4,220 mi/6,791km</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="has__props"
          >
            <h4>Day Length</h4>
            <p>24 hrs 37 min</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="has__props"
          >
            <h4>Force of Gravity</h4>
            <p>38% of Earth</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="has__props"
          >
            <h4>Avg Distance from Earth</h4>
            <p>225Mkm / 140Mmi</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="has__props"
          >
            <h4>Age</h4>
            <p>4.5 billion years</p>
          </div>
        </div>
      </div>

      <div className="whymars__howclose">
        <h1 className="whymars__howclose__heading all_heading">
          How close are we to colonizing Mars?
        </h1>
        <div className="whymars__howclose__para all_para">
          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            className="whymars__howclose__para_2"
          >
            Concepts of crewed Mars missions take about six months for between
            three and six astronauts to reach the planet, along with a few
            dozens of tons of consumables. Although it may be possible for some
            resources to be obtained from Mars—carbon dioxide from the
            atmosphere, water ice from the soil to produce oxygen and organic
            compounds, hematite to produce iron, silicates to produce
            glass—we’re decades away from understanding if any of that would be
            practically possible.
          </p>
        </div>
      </div>
      <div className="whymars__minimum_people right_div">
        <h1 className="whymars__minimum_people all_heading">
          minimum people need to colonize
        </h1>
        <div className="whymars__minimum_people_para all_para">
          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            className="whymars__howclose__para_0"
          >
            A mathematical model can be used to determine the minimum number of
            settlers and the way of life for survival on another planet,” writes
            Salotti. “The minimum number of settlers has been calculated and the
            result is 110 individuals.
          </p>
        </div>
      </div>

      <div className="whymars_more_info">
        <p className="whymars__howclose__para_3">
          for more info visit{" "}
          <a href="https://shrtco.de/dUaZJn" target="_blank">
            this
          </a>
        </p>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Whymars;
