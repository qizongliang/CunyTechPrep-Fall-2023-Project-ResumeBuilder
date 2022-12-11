import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const classes = {
  userRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "white",
    padding: "2px",
    "&:hover": {
      backgroundColor: "#efefef",
    },
  },
  userIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "100%",
  },
};

export default function UserList({ users }) {

  const navigate = useNavigate();
  return (
    <div>
      {users.map((user) => {
        return (
          <span className="user-row" key={user.id} onClick={()=>{
            navigate(`/profile?user_id=${user.id}`)
          }}>
            <span
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <img src={user.profile_picture_url} style={classes.userIcon} alt="profile icon"/>
              {user.username}
            </span>
          </span>
        );
      })}
    </div>
  );
}
