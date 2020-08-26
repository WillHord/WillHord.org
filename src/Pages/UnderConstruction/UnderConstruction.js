import React from "react";

class UnderConstruction extends React.Component {
  render() {
    return (
      <>
        <center
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Under Construction</h1>
          <img src="/Images/under-construction.gif" alt="under construction" />

          <h1>Coming Christmas 2002!</h1>
        </center>
      </>
    );
  }
}

export default UnderConstruction;
