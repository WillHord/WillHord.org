import React, { Component } from "react";

import Item from "./Item";
import Lead from "./Lead";
import BurgerIcon from "./BurgerIcon";

import "./Menu.css";

class TopMenu extends Component {
	static defaultProps = {
		color: "white",
		lead: false,
		shadow: "none",
		backgroundColor: "transparent",
		burgerColor: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			menu_class: "",
			isDesktop: false,
		};

		this.setToggleTopMenuClass = this.setToggleTopMenuClass.bind(this);
		this.SizeUpdate = this.SizeUpdate.bind(this);
	}
	setToggleTopMenuClass() {
		if (this.state.menu_class === "") {
			this.setState({
				menu_class: "toggled",
			});
		} else {
			this.setState({
				menu_class: "",
			});
		}
	}

	componentDidMount() {
		this.SizeUpdate();
		window.addEventListener("resize", this.SizeUpdate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.SizeUpdate);
	}

	SizeUpdate() {
		this.setState({ isDesktop: window.innerWidth > 705 });
	}

	render() {
		let top_menu_class = `top-menu ${this.state.menu_class}`;

		const { lead, shadow, backgroundColor, burgerColor } = this.props;
		const color = this.state.isDesktop ? this.props.color : "white";

		let BurgerColor;
		if (burgerColor !== null) {
			BurgerColor = this.props.burgerColor;
		} else {
			BurgerColor = color;
		}

		let bgColor;
		if (!this.state.isDesktop && this.state.menu_class === "") {
			bgColor = "transparent";
		} else {
			bgColor = backgroundColor;
		}
		const navbarStyle = {
			backgroundColor: bgColor,
		};

		let isLead;
		if (lead && this.state.isDesktop) {
			isLead = <Lead text="Will Hord" color={color} />;
		} else {
			isLead = "";
		}
		return (
			<div className={top_menu_class} style={navbarStyle}>
				{isLead}
				<div className="right">
					<Item text="Home" path="/" color={color} shadow={shadow} />
					<Item text="Resume" path="/Resume" color={color} shadow={shadow} />
					<Item
						text="Projects"
						path="/Projects"
						color={color}
						shadow={shadow}
					/>
					<Item text="About" path="/About" color={color} shadow={shadow} />
					<Item text="Contact" path="/Contact" color={color} shadow={shadow} />
				</div>
				<BurgerIcon
					onClick={this.setToggleTopMenuClass}
					setToggleTopMenuClass={this.setToggleTopMenuClass}
					color={BurgerColor}
				/>
				<div className="clear-fix" />
			</div>
		);
	}
}

export default TopMenu;
