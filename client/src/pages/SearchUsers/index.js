import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/user";
import Header from "./Header";
import UserList from "./UserList";

const classes = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    paddingInline: "8rem",
    marginTop: "2rem",
  },
};
function SearchUserPage() {

  const [users, setUsers] = useState([]);

  async function retrieveUsers() {
    await getAllUsers().then((res) => {
      setUsers(res.users);
    });
  }
  useEffect(() => {
    retrieveUsers();
  }, []);

  return (
    <div style={classes.container}>
      <Header />
      <UserList users={users} />
    </div>
  );
}

export default SearchUserPage;
