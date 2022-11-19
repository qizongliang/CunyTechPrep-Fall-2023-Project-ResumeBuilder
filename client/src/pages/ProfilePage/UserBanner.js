import { Avatar, Typography } from "@mui/material";
import React from "react";

const classes = {
  banner: {
    width: "100vw",
    backgroundColor: "#505459",
    height: "164px",
    display: "flex",
    justifyContent: "center",
  },
  bannerContent: {
    width: "min(100vw, 1000px)",
  },
  userSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  userIcon: {
    width: "84px",
    height: "84px",
    outline: "2px solid white",
  },
  username: {
    fontSize: "24px",
    color: "white",
  },
};

export default function UserBanner({ username, profile_picture_url }) {
  return (
    <div style={classes.banner}>
      <div style={classes.bannerContent}>
        <div style={classes.userSection}>
          <Avatar src={profile_picture_url} style={classes.userIcon} />
          <span style={classes.username}>{username}</span>
        </div>
      </div>
    </div>
  );
}
