import * as React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
let displayEnddate = (end_month, end_year) => {
  return (
    <>
      {end_month}
      {end_year}
    </>
  );
};
let displayMonthInWord = (month) => {
  let word = " ";

  switch (month) {
    case 1:
      word = "Jan.";
      break;

    case 2:
      word = "Feb.";
      break;

    case 3:
      word = "Mar.";
      break;

    case 4:
      word = "Apr.";
      break;

    case 5:
      word = "May.";
      break;

    case 6:
      word = "Jun.";
      break;

    case 7:
      word = "Jul.";
      break;

    case 8:
      word = "Aug.";
      break;

    case 9:
      word = "Sep.";
      break;

    case 10:
      word = "Oct.";
      break;

    case 11:
      word = "Nov.";
      break;

    case 12:
      word = "Dec.";
      break;

    default:
      word = "Null";
      break;
  }
  return word;
};
export default function ProjectItem(props) {
  console.log(props);
  return (
    <Card
      sx={{
        marginTop: 3,
      }}
    >
      <CardContent>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={9}>
            <Typography
              component="span"
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {props.info.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                color: "#909090",
              }}
            >
              {props.info.brief}
            </Typography>
          </Grid>

          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 540,
                mb: 3,
              }}
            >
              {displayMonthInWord(props.info.start_month)}{" "}
              {props.info.start_year}
              {" - "}
              {props.info.end_year === null
                ? "Present"
                : displayEnddate(props.info.end_month, props.info.end_year)}
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          <ul>
            {props.info.bullets.map((str) => {
              return <li>{str}</li>;
            })}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
