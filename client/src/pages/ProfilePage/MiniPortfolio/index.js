import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AboutMe from "./AboutMe/aboutMe";
import WorkExperience from "./WorkExperience/workExperience";
import Project from "./Project/project";
import { getProfile } from "../../../api/user";

export default function MiniPortfolio(props) {
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [searchParams] = useSearchParams();

  async function retrieveProfile(user_id) {
    await getProfile(user_id ?? 1) //default user 1
      .then((res) => {
        setUserInfo(res.profile);
        setProjects(res.projects);
        setWorkExperiences(res.work_experiences);
      })
      .catch(console.error);
  }

  useEffect(() => {
    const userId = searchParams.get("user_id");
    retrieveProfile(userId);
  }, [searchParams]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <AboutMe userInfo={userInfo} />
        <WorkExperience workItems={workExperiences} />
        <Project
          projects={projects}
          refreshProfile={retrieveProfile}
          userId={searchParams.get("user_id")}
        />
    </div>
  );
}
