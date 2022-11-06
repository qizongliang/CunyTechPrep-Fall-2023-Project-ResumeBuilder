import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import {MOCK_USERS} from "../constants/mock/users";

function SearchUserPage() {
  let userView = () =>{
    return MOCK_USERS.map((user)=>{
      
      return <li key={user.id}> {user.username}{user.description} </li>
    })
  }
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked")
  };

  if (success) return <Navigate to="/" />;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      {error && <ErrorAlert details={"Failed to save the content"} />}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Username here..."
            value={content}
            className="form-control"
            onChange={handleContentChange}
            autoFocus
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      {userView()}
    </div>
  );
}
export default SearchUserPage;
