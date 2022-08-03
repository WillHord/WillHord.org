import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faFacebook,
	faLinkedin,
	faGithub,
	// faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BottomMenuItem from "./BottomMenuItem";

import "./BottomMenu.css";

class BottomMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overflow: false,
			LinkHover: false,
		};
		this.SizeUpdate = this.SizeUpdate.bind(this);
	}
	componentDidMount() {
		this.SizeUpdate();
		window.addEventListener("resize", this.SizeUpdate);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.SizeUpdate);
	}

	SizeUpdate() {
		this.setState({ overflow: window.innerWidth < 400 });
	}

	render() {
		const { overflow, LinkHover } = this.state;
		const loginLink = {
			color: "white",
			textDecoration: "none",
		};

		let bottomLinks;
		if (overflow) {
			bottomLinks = (
				<>
					<ul
						onMouseEnter={() => {
							this.setState({ LinkHover: true });
						}}
						onMouseLeave={() => {
							this.setState({ LinkHover: false });
						}}
					>
						<BottomMenuItem text="Home" path="/" hoverStyle={LinkHover} />
						<BottomMenuItem
							text="Resume"
							path="/Resume"
							hoverStyle={LinkHover}
						/>
						<BottomMenuItem
							text="Projects"
							path="/Projects"
							hoverStyle={LinkHover}
						/>
					</ul>
					<ul
						onMouseEnter={() => {
							this.setState({ LinkHover: true });
						}}
						onMouseLeave={() => {
							this.setState({ LinkHover: false });
						}}
					>
						<BottomMenuItem text="About" path="/About" hoverStyle={LinkHover} />
						<BottomMenuItem
							text="Contact"
							path="/Contact"
							hoverStyle={LinkHover}
						/>
					</ul>
				</>
			);
		} else {
			bottomLinks = (
				<>
					<ul
						onMouseEnter={() => {
							this.setState({ LinkHover: true });
						}}
						onMouseLeave={() => {
							this.setState({ LinkHover: false });
						}}
					>
						<BottomMenuItem text="Home" path="/" hoverStyle={LinkHover} />
						<BottomMenuItem
							text="Resume"
							path="/Resume"
							hoverStyle={LinkHover}
						/>
						<BottomMenuItem
							text="Projects"
							path="/Projects"
							hoverStyle={LinkHover}
						/>
						<BottomMenuItem text="About" path="/About" hoverStyle={LinkHover} />
						<BottomMenuItem
							text="Contact"
							path="/Contact"
							hoverStyle={LinkHover}
						/>
					</ul>
				</>
			);
		}

		return (
			<>
				<div className="BottomMenu">
					<div className="Links">{bottomLinks}</div>
					<div className="social-icons">
						<ul>
							{/* <a href='/' style={loginLink}><FontAwesomeIcon icon={faFacebook} size='2x'/></a> */}
							<a
								target="_blank"
								href="https://www.linkedin.com/in/willhord/"
								style={loginLink}
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} size="2x" />
							</a>
							<a
								target="_blank"
								href="https://github.com/WillHord"
								style={loginLink}
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} size="2x" />
							</a>
							{/* <a href='/' style={loginLink}><FontAwesomeIcon icon={faYoutube} size='2x'/></a> */}
							<a href="/contact" style={loginLink}>
								<FontAwesomeIcon icon={faEnvelope} size="2x" />
							</a>
						</ul>
					</div>
					<div className="login">
						<Link className="loginLink" to="/Login">
							Login
						</Link>
					</div>
					<div className="license">
						<p>Website Created and Hosted by Will Hord using React JS</p>
					</div>
				</div>
			</>
		);
	}
}

export default BottomMenu;
