import React from "react";

import "./ProjectBox.css";

class LanguageFooter extends React.Component {
  constructor(props) {
    super(props);

    this.language = props.language;
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          className="FooterBox"
          onClick={() => {
            this.props.changeSort(this.language);
          }}
        >
          <span className="language"> {this.language}</span>
        </div>
      </>
    );
  }
}

export default LanguageFooter;
