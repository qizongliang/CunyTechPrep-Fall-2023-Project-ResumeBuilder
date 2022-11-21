import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutMe(props) {
  const [Biography, setBiography] = useState(props.description + "Deez");

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
      <Typography variant="h5">About Me</Typography>

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
  )
}
