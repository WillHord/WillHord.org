import React from "react";

const Sort = ({ children, by }) => {
  if (by === "title") {
    return React.Children.toArray(children);
  } else {
    return React.Children.toArray(children).sort(function (a, b) {
      if (
        (a.props.programmingLanguages.filter(function(e) { return e.name === by; }).length > 0) &&
        (b.props.programmingLanguages.filter(function(e) { return e.name === by; }).length > 0)
      ) {
        if (a.props.title > b.props.title) {
          return -1;
        } else {
          return 1;
        }
      } else if ((a.props.programmingLanguages.filter(function(e) { return e.name === by; }).length > 0)) {
        return -1;
      } else {
        return 1;
      }
    });
  }
};

export default Sort;