import { useState, useEffect } from "react";
import { get } from "lodash";
import UserBanner from "./UserBanner";
import TabGroups from "../../components/TabGroups";
import MiniPortfolio from "./MiniPortfolio";
import ResumeThread from "./ResumeThread";
import { getProfile } from "../../api/user";
import ResumeBox from "./ResumeThread/ResumeBox";

const classes = {
  content: {
    width: "min(100vw, 1000px)",
  },
};

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  async function retrieveProfile() {
    await getProfile(1)
      .then((res) => {
        setUserInfo(res.profile);
        setProjects(res.projects);
        setWorkExperiences(res.work_experiences);
      })
      .catch(console.error);
  }

  useEffect(() => {
    retrieveProfile();
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
      component: <ResumeThread />,
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
