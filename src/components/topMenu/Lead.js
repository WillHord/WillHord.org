import React, { Component } from "react";

import "./Lead.css";

class Lead extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    const color = this.props.color;
    const colorStyle = {
      color: color,
    };
    return (
      <div className="top-menu-lead" style={colorStyle}>
        <a href="/" className="top-menu-lead-link">{this.text}</a>
      </div>
    );
  }
}

export default Lead;
