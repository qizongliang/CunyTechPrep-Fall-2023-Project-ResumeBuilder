import * as React from "react";
import { Typography } from "@mui/material";
import ProjectItem from "./projectItem";

export default function Project(props) {
  let displayedProjects = props.projects;
  console.log(props);

  let displayProjectItem = displayedProjects.map((item) => {
    return <ProjectItem key={item.id} info={item} />;
  });

  return (
    <>
      <Typography variant="h5">Project</Typography>
      {displayProjectItem}
    </>
  );
}
