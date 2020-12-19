import React from "react";

const Spinner = (props) => {
  console.log(props);
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h1>{props.texts}</h1>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  texts: "Loading.....",
};

export default Spinner;
