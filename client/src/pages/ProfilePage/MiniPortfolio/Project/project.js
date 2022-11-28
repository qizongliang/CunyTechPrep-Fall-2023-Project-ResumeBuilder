import * as React from "react";
import { Typography } from "@mui/material";
import { MOCK_PROFILES } from "../../../../constants/mock/profile";
import ProjectItem from "./projectItem";

export default function project(props) {
  let displayedProjects = MOCK_PROFILES.ButterRiolu.details.Projects;

  let displayProjectItem = displayedProjects.map((item) => {
    return <ProjectItem key={item.id} info={item} />;
  });

  return (
    <>
      <Typography variant="h3" component="h2">
        Project
      </Typography>
      {displayProjectItem}
    </>
  );
}
