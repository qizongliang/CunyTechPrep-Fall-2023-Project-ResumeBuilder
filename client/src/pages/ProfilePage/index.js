import { useState, useEffect } from "react";
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
  const [resumeThread, setResumeThread] = useState({});

  async function retrieveProfile() {
    await getProfile(1)
      .then((res) => {
        setUserInfo(res.profile);
        setProjects(res.projects);
        setWorkExperiences(res.work_experiences);
        setResumeThread(res.current_resume);
      })
      .catch(console.error);
  }

  useEffect(() => {
    retrieveProfile();
    console.log(userInfo);
  }, []);

  const username = "ButterRiolu";
  const pfp_url =
    "https://storage.googleapis.com/katsudon-assets/user-profiles/6306b34920cf5f80f7d0c20d/pfp.jpg";

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
      component: <ResumeThread resumeThread={resumeThread} />,
    },
  ];

  function ComponentWrapper(props) {
    return <div style={classes.content}>{props.children}</div>;
  }

  return (
    <>
      <UserBanner username={username} profile_picture_url={pfp_url} />
      <TabGroups contents={contents} ComponentWrapper={ComponentWrapper} />
    </>
  );
}
