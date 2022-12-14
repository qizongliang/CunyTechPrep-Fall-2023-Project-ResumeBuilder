import { Avatar, IconButton } from "@mui/material";
import { Fragment } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateCommentBox from "./CreateCommentBox";

const classes = {
  commentSection: {
    display: "grid",
    gridTemplateColumns: "repeat(16,1fr)",
    width: "min(100vw,800px)",
    padding: "1rem",
    rowGap: "1.5rem",
    columnGap: "1rem",
  },
  userSection: {
    gridColumn: "1 / span 2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  userIcon: {
    width: "36px",
    height: "36px",
    border: "2px solid white",
  },
  username: {
    fontSize: "12px",
  },
  commentBox: {
    gridColumn: "3 / auto-fill",
    backgroundColor: "white",
    minHeight: "50px",
    borderRadius: "8px",
  },
  likes: {
    height: "100%",
    width: "28px",
    backgroundColor: "#FAA160",
    borderRadius: "8px 0 0 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  commentContent: {
    fontSize: "14px",
    width: "100%",
    padding: "0.25rem",
  },
};

export default function Comments({ comments, postId, retrieveProfile }) {
  const likeButtonWidth = "18px";
  return (
    <div style={classes.commentSection}>
      <div
        style={{
          gridColumn: "3 / 18",
        }}
      >
        <CreateCommentBox postId={postId} retrieveProfile={retrieveProfile} />
      </div>
      {comments.map((userComment, idx) => {
        const { username, profile_picture_url, comment, likes } = userComment;
        return (
          <Fragment key={idx}>
            <div style={classes.userSection}>
              <Avatar src={profile_picture_url} style={classes.userIcon} />
              <span style={classes.username}>{username}</span>
            </div>
            <div style={classes.commentBox}>
              <div style={{ display: "flex", height: "100%" }}>
                <div style={classes.likes}>
                  {likes}
                  <IconButton
                    style={{ width: likeButtonWidth, height: likeButtonWidth }}
                  >
                    <FavoriteBorderIcon
                      style={{ fontSize: likeButtonWidth, color: "white" }}
                    />
                  </IconButton>
                </div>
                <div style={classes.commentContent}>{comment}</div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
