"use client"
import React from "react";

import TerminalItem from "./TerminalItem";
import TerminalSkip from "./TerminalSkip";

class Terminal extends React.Component {
	static defaultProps = {
		typingSpeed: 150,
		lineDelay: 1000,
		timeInBetweenLines: 150,
		startDelay: 2000,
		prefix: "",
	};
	constructor(props) {
		super(props);
		this.state = {
			childNumber: 0,
			typingSpeed: 150,
			firstLine: true,
			lineComplete: false,
			skipped: false,
		};
		this._isMounted = false;

		this.handleTyping = this.handleTyping.bind(this);
		this.handleGlobals = this.handleGlobals.bind(this);
		this.handleSkip = this.handleSkip.bind(this);
		this.getChildren = this.getChildren.bind(this);

		this.children = React.Children.toArray(this.props.children).filter(Boolean);
		this.numberOfItems = this.getChildren();
		this.props.children.forEach(
			(child, index) => (this[`child-${index}`] = React.createRef())
		);
	}

	getChildren() {
		if (this.children) {
			return (
				this.children.length -
				this.children.filter((child) => child.type === TerminalSkip).length
			);
		} else {
			return 0;
		}
	}

	handleSkip() {
		const childNumber = this.state.childNumber;
		if (childNumber < this.numberOfItems) {
			if (
				this.children[childNumber] &&
				this.children[childNumber].type === TerminalItem
			) {
				this.setState({ skipped: true });
				this.handleGlobals(this[`child-${childNumber}`]);
			} else if (this.children[childNumber]) {
				this.setState({ childNumber: this.state.childNumber + 1 });
			}
			setTimeout(() => this.handleSkip(), 0);
		} else {
			return;
		}
		return;
	}

	componentDidMount() {
		this._isMounted = true;
		this._isMounted && setTimeout(this.handleTyping, 500);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	handleGlobals(child) {
		this._isMounted &&
			this.setState({ childNumber: this.state.childNumber + 1 });
		if (this.props.prefix !== "" && this._isMounted) {
			child.changePrefix(this.props.prefix);
		}
		if (this.state.childNumber === this.numberOfItems) {
			child.setLastLine();
		}
		if (this.state.childNumber === 1 && this._isMounted) {
			child.setFirstLine();
		}
	}

	handleTyping() {
		const childNumber = this.state.childNumber;
		if (
			childNumber < this.numberOfItems &&
			this.children[childNumber].type !== TerminalItem
		) {
			this.setState({ childNumber: this.state.childNumber + 1 });
			this.handleTyping();
		} else if (childNumber < this.numberOfItems && !this.state.skipped) {
			if (childNumber === 0) {
				// console.log(this[`child-${childNumber}`])
				this.handleGlobals(this[`child-${childNumber}`]);
				setTimeout(() => {
					if (this[`child-${childNumber}`]) {
						this[`child-${childNumber}`].handleType();
					}
				}, this.props.startDelay);
			} else {
				this._isMounted && this.handleGlobals(this[`child-${childNumber}`]);
				this._isMounted && this[`child-${childNumber}`].handleType();
			}
		}
		return;
	}

	render() {
		return (
			<>
				{this.children.map((child, index) => {
					if (child.type === TerminalItem && this._isMounted)
						return (
							<TerminalItem
								key={`child-${index.toString()}`}
								lineComplete={this.handleTyping}
								ref={(ref) => {
									this[`child-${index}`] = ref;
								}}
								shouldDelete={child.props.shouldDelete}
								newLine={child.props.newLine}
								style={child.props.style}
								className={this.props.className}
								skip={this.state.skipped}
							>
								{child}
							</TerminalItem>
						);
					if (child.type === TerminalSkip && this._isMounted)
						return (
							<TerminalSkip
								key={`child-${this.children.indexOf(child).toString()}`}
								ref={(ref) => {
									this[`child-${this.children.indexOf(child)}`] = ref;
								}}
								skip={this.handleSkip}
							>
								{child}
							</TerminalSkip>
						);
					return <span key={`child-${index.toString()}`}>{child}</span>;
				})}
			</>
		);
	}
}

export default Terminal;
