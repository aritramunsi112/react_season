import React from "react";
import "./Seasondisplay.css";

const Seasonmessage = {
  winter: {
    text: "Burr It's Chilly",
    iconname: "snowflake",
  },
  summer: {
    text: "Let's Hit the beach",
    iconname: "sun",
  },
};
const Getseason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const Seasondisplay = (props) => {
  const season = Getseason(props.lat, new Date().getMonth());
  console.log(new Date().getMonth());
  console.log(props.lat);
  console.log(new Date());
  console.log(season);
  /*
  const text = season === "winter" ? "Burr Its chilly" : "Let's Hit the beach";
  const icon = season === "winter" ? "snowflake" : "sun";
  */

  const { text, iconname } = Seasonmessage[season];
  return (
    <div>
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive  ${iconname} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive  ${iconname} icon`}></i>
        <div className="ui divider"></div>
        <br />
      </div>
      <div className="kek ui massive four button">
        <h1>Geopositions</h1>
        <div className="ui divider"></div>
        <button className="ui blue button">
          <i className="big red google icon"></i>
          <h1>Latitude:{props.lat}</h1>
        </button>
        <button className="ui  green button">
          <i className="big yellow google plus icon"></i>
          <h1>Longitude:{props.longs}</h1>
        </button>
        <div className="ui divider"></div>
      </div>
    </div>
  );
};

export default Seasondisplay;
