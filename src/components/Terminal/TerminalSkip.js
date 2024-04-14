"use client"
import React from "react";

class TerminalSkip extends React.Component {
	render() {
		return (
			<>
				<div
					style={{
						width: "100%",
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "flex-end",
						flex: "1",
					}}
				>
					<span className="skip" onClick={this.props.skip}>
						{this.props.children}
					</span>
				</div>
			</>
		);
	}
}

export default TerminalSkip;
