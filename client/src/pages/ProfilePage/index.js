import React from "react";
import UserBanner from "./UserBanner";
import TabGroups from "../../components/TabGroups";
import MiniPortfolio from "./MiniPortfolio";
import ResumeThread from "./ResumeThread";

const classes = {
  content: {
    width: "min(100vw, 1000px)",
  },
};

export default function ProfilePage() {
  const username = "ButterRiolu";
  const pfp_url =
    "https://storage.googleapis.com/katsudon-assets/user-profiles/6306b34920cf5f80f7d0c20d/pfp.jpg";

  const contents = [
    { label: "Profile", component: <MiniPortfolio /> },
    { label: "Resume", component: <ResumeThread /> },
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
