import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { addComment } from "../../../api/user";

const classes = {
  sendButton: {
    fontSize: "1.5rem",
  },
};

export default function CreateCommentBox({ postId, retrieveProfile }) {
  const [comment, setComment] = useState("");

  async function createComment(event) {
    event.preventDefault();
    if (!comment.length) return;

    await addComment({
      resume_post_id: postId,
      comment: comment,
    }).then(async () => {
      setComment("");
      await retrieveProfile();
    });
  }

  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        position: "relative",
        padding: "0.5rem",
        
        backgroundColor: "white",
      }}
    >
      <form onSubmit={createComment}>
        <TextField
          variant="standard"
          value={comment}
          placeholder="Leave some feedback for them"
          multiline
          rows={4}
          fullWidth
          inputProps={{
            style: {
              fontSize: "0.9rem",
              color: "black",
            },
          }}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <IconButton
          type="submit"
          style={{
            position: "absolute",
            top: "4px",
            right: "0.5rem",
          }}
        >
          <SendIcon style={classes.sendButton} />
        </IconButton>
      </form>
    </div>
  );
}
