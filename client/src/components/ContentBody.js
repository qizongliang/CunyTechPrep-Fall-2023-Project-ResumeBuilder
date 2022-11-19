import React from "react";

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#CBD5E1",
    height: "100vh",
    width: "1200px",
    display: "flex",
    justifyContent: "center",
  },
};

export default function ContentBody(props) {
  return (
    <div style={classes.container}>
      <div style={classes.content}>{props.children}</div>
    </div>
  );
}
