import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.path = props.path;
    this.color = props.color;
    this.shadow = props.shadow;
  }

  render() {
    const { color, shadow } = this.props;
    const itemStyle = {
      color: color,
      textDecoration: "none",
      fontSize: "17px",
      textShadow: shadow,
    };
    return (
      <div className="top-menu-item">
        <Link style={itemStyle} to={this.path}>
          {this.text}
        </Link>
      </div>
    );
  }
}

export default Item;
