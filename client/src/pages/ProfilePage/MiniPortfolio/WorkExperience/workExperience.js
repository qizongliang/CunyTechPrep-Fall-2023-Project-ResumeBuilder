import * as React from "react";
import { Typography } from "@mui/material";
import WorkExperienceItem from "./workExperienceItem";

export default function WorkExperience(props) {
  let workExpItems = props.workItems;
  let displayWorkItem = workExpItems.map((item) => {
    return <WorkExperienceItem key={item.id} info={item} />;
  });

  return (
    <>
      <Typography variant="h5">Work Experience</Typography>
      {displayWorkItem}
    </>
  );
}
