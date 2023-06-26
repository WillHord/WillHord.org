import React from "react";
import { Link } from "react-router-dom";

// import './BottomMenuItem.css'

class BottomMenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.text = props.text;
		this.path = props.path;
		this.hoverStyle = props.hoverStyle;
		this.state = {
			hovered: false,
		};
	}

	render() {
		const { hovered } = this.state;

		const itemStyle = {
			color: "white",
			textDecoration: "none",
			transition: ".2s",
			opacity: hovered ? "1" : this.props.hoverStyle ? ".2" : "1",
		};
		// if this.path is mailto link then open in new tab
		if (this.path.includes("mailto")) {
			return (
				<a
					className="bottom-menu-item"
					style={itemStyle}
					href={this.path}
					target="_blank"
					rel="noopener noreferrer"
					>
					{this.text}
					</a>
			);
		}

		return (
			<Link
				className="bottom-menu-item"
				style={itemStyle}
				to={this.path}
				onMouseEnter={() => {
					this.setState({ hovered: true });
				}}
				onMouseLeave={() => {
					this.setState({ hovered: false });
				}}
			>
				{this.text}
			</Link>
		);
	}
}

export default BottomMenuItem;
