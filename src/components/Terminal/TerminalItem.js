"use client"
import React from "react";
import "./Terminal.css";

class TerminalItem extends React.Component {
    static defaultProps = {
        newLine: true,
        typingDelay: 50,
        deleteDelay: 30,
        prefix: "",
        shouldDelete: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            displayed: "",
            prefix: "",
            deleting: false,
            Stopped: false,
            lastLine: false,
            firstLine: false,
        };
        this.handleType = this.handleType.bind(this);
        this.changePrefix = this.changePrefix.bind(this);
        this.setLastLine = this.setLastLine.bind(this);
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    changePrefix(newPrefix) {
        this.setState({ prefix: newPrefix });
    }

    setLastLine() {
        this.setState({ lastLine: true });
    }

    setFirstLine() {
        this.setState({ firstLine: true });
    }

    handleType() {
        if (this.props.skip) {
            return;
        }
        const { typingDelay, deleteDelay, shouldDelete } = this.props;
        const { deleting, displayed } = this.state;
        const fullText = this.props.children.props.children;

        this.setState({
            displayed: deleting
                ? fullText.substring(0, displayed.length - 1)
                : fullText.substring(0, displayed.length + 1),
            typingSpeed: deleting ? deleteDelay : typingDelay,
        });

        if (shouldDelete && displayed === fullText) {
            setTimeout(() => this.setState({ deleting: true }), 500);
        } else if (
            displayed === this.props.children.props.children ||
            (displayed === "" && deleting === true)
        ) {
            setTimeout(() => this.props.lineComplete(), 500);
            setTimeout(() => this.setState({ Stopped: true }), 500);
            return;
        }

        if (this._isMounted)
            setTimeout(() => {
                if (this._isMounted) {
                    this.handleType();
                }
            }, typingDelay);
    }

    render() {
        if (this.props.prefix !== this.state.prefix && this.props.prefix !== "") {
            this.changePrefix(this.props.prefix);
        }
        const { deleting, Stopped, displayed } = this.state;

        // If the item is done deleting and displayed text is empty, render nothing
        if (deleting && Stopped && displayed === "") {
            return null;
        }

        if (this.props.skip) {
            if (this.props.shouldDelete) {
                return <></>;
            } else {
                return (
                    <>
                        <span
                            className={this.props.className}
                            style={{ display: this.props.newLine ? "inline" : "block" }}
                        >
                            {this.state.prefix}
                            {this.props.children.props.children}
                            {!this.state.lastLine ? <span /> : <span className="cursor" />}
                        </span>
                    </>
                );
            }
        } else {
            return (
                <>
                    <span
                        className={this.props.className}
                        style={{ display: this.props.newLine ? "inline" : "block" }}
                    >
                        {deleting && Stopped ? "" : this.state.prefix}
                        {this.state.displayed}
                        {(Stopped && !this.state.lastLine) ||
                        (this.state.displayed === "" && !this.state.firstLine) ? (
                            <span />
                        ) : (
                            <span className="cursor" />
                        )}
                    </span>
                </>
            );
        }
    }
}

export default TerminalItem;
