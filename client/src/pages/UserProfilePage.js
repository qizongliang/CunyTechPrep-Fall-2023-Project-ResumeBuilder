import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import { MOCK_USERS } from '../constants/mock/users'
import Avatar from '@mui/material/Avatar'
import { MOCK_PROFILES } from '../constants/mock/profile'

function UserProfilePage() {
  // const [allUsers, setAllUsers] = useState([])

  // function getAllUsers() {
  //   fetch('http://localhost:8000/api/users/all')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllUsers(data.users)
  //     })
  // } // Not yet Implemented

  // useEffect(() => {
  //   getAllUsers()
  // }, [])

  let displayedUser = MOCK_USERS.filter((user) => user.id <= 1)
  let displayeProfile = MOCK_PROFILES.ButterRiolu

  const profile_picture_placeholder =
    'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  let userView = function (user, profile) {
    return (
      <div className="container-fluid bg-dark">
        <img
          src={user[0].profile_picture_url ?? profile_picture_placeholder}
          alt=""
          class="img-fluid rounded-circle start m-auto p-0 float-left"
          width="150px"
          height="150px"
        />
        <div className="container-fluid bg-dark">
          <div></div>
          <p className="text-center m-0 Container-fluid p-0 text-white">
            {user[0].username}{' '}
          </p>
          <div></div>
        </div>
      </div>
    )
  }

  return (
    <div className="col-12 col-md-12 col-lg-12">
      {userView(displayedUser, displayeProfile)}
    </div>
  )
}

export default UserProfilePage
