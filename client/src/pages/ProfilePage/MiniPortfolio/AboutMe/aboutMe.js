import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutMe(props) {
  const [Biography, setBiography] = useState(
    "I'm a guy who's in my Nth year in this college, studying this field that you've probably never heard of. I do this and that while performing this for fun. Currently trying out this weird thing, hoping to find something cool. But I really suck at doing this, so I'm dealing that by practicing this thing."
  );

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
          <Item>{Biography}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{displayEducation("Hunter College")}</Item>
        </Grid>
      </Grid>
    </>
  );
}
