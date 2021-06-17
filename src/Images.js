import React, { useState, useEffect } from "react";
import "./Images.css";
import ImageCard from "./ImageCard";
import { Button } from "@material-ui/core";
import DatePickers from "./DatePickers";
import Footer from "./Footer";






function Images() {
  //Api key

  const ApiKey = process.env.React_App_API_KEY;
  
  //list for all the api data
  
  const [details, setDetails] = useState([]);

  //check wheather the call was succesfull or not and loading time
  const [flag, setFlag] = useState({
    isOk: true,
    isLoad: false,
  });

  const [openCal, setOpenCal] = useState(false);

  //for starting date 2 days back
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 2);

  //hook for date
  const [myDate, setMyDate] = useState({
    year: startDate.getFullYear(),
    month: startDate.getMonth() + 1,
    day: startDate.getDate(),
  });

  //Date change handle

  const handleDateChange = (e) => {
    const userDate = e.target.value;
    setMyDate({
      year: userDate.slice(0, 4),
      month: userDate.slice(5, 7),
      day: userDate.slice(8, 10),
    });
  };
  //fetching data
  const getData = async () => {
    
    const responce = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${myDate.year}-${myDate.month}-${myDate.day}&api_key=${ApiKey}`
    );

    if (responce.status !== 200) {
      setFlag((prev) => ({ ...prev, ["isOk"]: false }));
    } else {
      const data = await responce.json();

      setDetails(data.photos);
      setFlag({
        isOk: true,
        isLoad: true,
      });
    }
  };

  //load when mydate changes
  useEffect(() => {
    getData();
  }, [myDate]);

  return (
    <div className="images">
      <div className="images__body">
        <div className="images__calender">
          {openCal && <DatePickers handleChange={handleDateChange} />}

          <Button
            onClick={() => setOpenCal(!openCal)}
            variant="outlined"
            color="primary"
            className="calender__button"
          >
            Calender
          </Button>
        </div>

        {flag.isLoad ? (
          details.length == 0 ? (
            <h1 className="images__error ">
              Sorry no Image for this day!{" "}
              <img
                className="noImage__error"
                src="https://i.pinimg.com/originals/04/36/bf/0436bfc9861b4b57ffffda82d3adad6e.gif"
                alt=""
              />
            </h1>
          ) : (
            <div className="container">
              {details.map((detail) => {
                return <ImageCard key={detail.id} detail={detail} />;
              })}
            </div>
          )
        ) : (
          <h1 className="images__error">
            {flag.isOk ? "Loading..." : "Ooops!!"}
          </h1>
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Images;
