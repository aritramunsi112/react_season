import React from "react";
import ReactDOM from "react-dom";
import Seasondisplay from "./Seasondisplay";
import Spinner from "./Spinner";

/*const App = () => {
 
  return (
    <div>
      <h1>hello world</h1>
      <button className="ui basic green button">Accept</button>

      <button className="ui basic red button">Reject</button>
    </div>
  );
};*/

class App extends React.Component {
  /*constructor(props) {
    super(props);
    // this.state =
  }*/
  state = { lat: null, longs: null, errm: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: Math.round(position.coords.latitude, 2),
          longs: Math.round(position.coords.longitude, 2),
        });
      },
      (err) => {
        this.setState({ errm: err.message });
      }
    );
  }

  rendercontent() {
    if (!this.state.errm && this.state.lat) {
      return (
        <Seasondisplay
          lat={this.state.lat}
          longs={this.state.longs}
        ></Seasondisplay>
      );
    } else if (this.state.errm && !this.state.lat) {
      return (
        /* <div className="ui three button">
        
          <h1>Geopositions</h1>
          <div className="ui divider"></div>
          <button className="ui  blue button">
            <i className="big red google icon"></i>
           <h1>Latitude:{this.state.lat}</h1>


          </button>
          <button className="ui  green button">
            <i className="big yellow google plus icon"></i>
            <h1>Longitude:{this.state.longs}</h1>
          </button>
          <div className="ui divider"></div>
        </div>*/

        <div className="ui three button">
          <h1>Geopositions</h1>

          <div className="ui divider"></div>
          <button className="ui red button">Error:{this.state.errm}</button>
        </div>
      );
    } else {
      return <Spinner></Spinner>;
    }
  }

  render() {
    return <div>{this.rendercontent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
