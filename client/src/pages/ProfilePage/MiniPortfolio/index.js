import React from "react";
import AboutMe from "./AboutMe/aboutMe";
import WorkExperience from "./WorkExperience/workExperience";
import Project from "./Project/project";
export default function MiniPortfolio(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <AboutMe userInfo={props.userInfo} />
      <WorkExperience workItems={props.workExperiences} />
      <Project projects={props.projects} />
    </div>
  );
}
