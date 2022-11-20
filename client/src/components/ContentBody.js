import React from "react";

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#CBD5E1",
    minHeight: "100vh",
    width: "1200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};

export default function ContentBody(props) {
  return (
    <div style={classes.container}>
      <div style={classes.content}>{props.children}</div>
    </div>
  );
}
