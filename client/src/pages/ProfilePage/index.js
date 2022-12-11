import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserBanner from "./UserBanner";
import TabGroups from "../../components/TabGroups";
import MiniPortfolio from "./MiniPortfolio";
import ResumeThread from "./ResumeThread";
import { getProfile } from "../../api/user";

const classes = {
  content: {
    width: "min(100vw, 1000px)",
  },
};

export default function ProfilePage() {
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

  const contents = [
    {
      label: "Profile",
      component: (
        <MiniPortfolio
          userInfo={userInfo}
          workExperiences={workExperiences}
          projects={projects}
        />
      ),
    },
    {
      label: "Resume",
      component: <ResumeThread userId={searchParams.get("user_id")} />,
    },
  ];

  function ComponentWrapper(props) {
    return <div style={classes.content}>{props.children}</div>;
  }

  return (
    <>
      <UserBanner
        username={userInfo.username}
        profile_picture_url={userInfo.profile_picture_url}
      />
      <TabGroups contents={contents} ComponentWrapper={ComponentWrapper} />
    </>
  );
}
