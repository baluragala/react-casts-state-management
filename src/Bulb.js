import React, { Component } from "react";
import "./Bulb.css";

class Bulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      isSwitchOn: true,
      switchClass: "cube-switch active"
    };
    this.handleSwicthOnOff = this.handleSwicthOnOff.bind(this);
  }
  handleSwicthOnOff() {
    if (this.state.isSwitchOn) {
      this.setState({
        isSwitchOn: false,
        opacity: 0,
        switchClass: "cube-switch"
      });
    } else {
      this.setState({
        isSwitchOn: true,
        opacity: 1,
        switchClass: "cube-switch active"
      });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.switchClass}>
          <span className="switch" onClick={this.handleSwicthOnOff}>
            <span className="switch-state off">Off</span>
            <span className="switch-state on">On</span>
          </span>
        </div>
        <div id="light-bulb" className="off ui-draggable">
          <div id="light-bulb2" style={{ opacity: this.state.opacity }} />
        </div>
      </div>
    );
  }
}

export default Bulb;
