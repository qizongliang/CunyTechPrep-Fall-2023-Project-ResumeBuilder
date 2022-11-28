import React from "react";
import AboutMe from "./AboutMe/aboutMe";
import WorkExperience from "./WorkExperience/workExperience";
import Project from "./Project/project";
export default function MiniPortfolio(props) {
  return (
    <>
      <AboutMe userInfo={props.userInfo} />
      <br />
      <WorkExperience workItems={props.workExperiences} />
      <br />
      <Project />
      <br />
    </>
  );
}
