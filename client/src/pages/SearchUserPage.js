import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import { MOCK_USERS } from '../constants/mock/users'
import Avatar from '@mui/material/Avatar'
async function getAllUsers() {} // Not yet Implemented

function SearchUserPage() {
  const profile_picture_placeholder =
    'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  let userView = MOCK_USERS.map((user) => {
    return (
      <div
        class="container border border-secondary rounded pull-left"
        key={user.id}
      >
        <div class="row">
          <div class="col-1 m-0 p-0">
            <img
              src={user.profile_picture_url ?? profile_picture_placeholder}
              alt=""
              class="img-fluid rounded-circle start m-auto p-0 float-left"
              width="32px"
              height="32px"
            />
          </div>
          <div class="col-3 m-auto p-0">
            <p class="text-start m-0 Container-fluid p-0">{user.username} </p>
          </div>
          <div class="col-8 m-auto p-0">
            <p class="text-end m-0 Container-fluid p-0">{user.description}</p>
          </div>
        </div>
      </div>
    )
  })

  const [content, setContent] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Clicked')
  }

  if (success) return <Navigate to="/" />

  return (
    <div className="col-10 col-md-8 col-lg-7">
      {error && <ErrorAlert details={'Failed to save the content'} />}
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
      {userView}
    </div>
  )
}

export default SearchUserPage
