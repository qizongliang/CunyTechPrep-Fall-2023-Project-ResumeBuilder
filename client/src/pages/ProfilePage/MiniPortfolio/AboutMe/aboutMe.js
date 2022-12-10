import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const classes = {
  detailsBox: {
    width: "100%",
    minHeight: "100px",
    border: "1px solid #B1B1B1",
    backgroundColor: "white",
    padding: "0.5rem"
  },
};
export default function AboutMe(props) {
  console.log(props);
  let displayEducation = (education) => {
    return (
      <>
        <a href="https://hunter.cuny.edu/">Education</a>
        <p>{education}</p>
      </>
    );
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5" align="center">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="stretch"
        spacing={2}
        sx={{ marginTop: 1 }}
      >
        <Grid item xs={8}>
          <div style={classes.detailsBox}>{props.userInfo.description}</div>
        </Grid>
        <Grid item xs={4}>
          <div style={classes.detailsBox}>
            {displayEducation("Hunter College")}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
