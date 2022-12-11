import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const classes = {
  detailsBox: {
    width: "100%",
    minHeight: "100px",
    border: "1px solid #B1B1B1",
    backgroundColor: "white",
    padding: "0.5rem",
  },
};
export default function AboutMe(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginInline: "0.5rem",
        }}
      >
        <Typography variant="h5" align="center">
          About Me
        </Typography>
        <div
          style={{
            flexGrow: 1,
            height: "2px",
            backgroundColor: "#60A5FA",
          }}
        />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div style={classes.detailsBox}>{props.userInfo.description}</div>
        </Grid>
      </Grid>
    </>
  );
}
