import * as React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { displayMonthInWord } from "../utilsDisplayMonthInWord";

export default function WorkExperienceItem(props) {
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
              {props.info.job_title}
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                color: "#909090",
              }}
            >
              {props.info.company}
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
              {props.info.end_year === null ? (
                "Present"
              ) : (
                <>
                  {displayMonthInWord(props.info.end_month)}
                  {props.info.end_year}
                </>
              )}
            </Typography>
          </Grid>
        </Grid>

        <ul>
          {props.info.bullets.map((str, i) => {
            return <li key={i}>{str}</li>;
          })}
        </ul>

        <span style={{ display: "flex", gap: "10px" }}>
          {props.info.tools_used.map((str, i) => {
            return (
              <code key={i} style={{ color: "#569cd6" }}>
                {str}
              </code>
            );
          })}
        </span>
      </CardContent>
    </Card>
  );
}
