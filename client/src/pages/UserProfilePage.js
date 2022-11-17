import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import { MOCK_USERS } from '../constants/mock/users'
import Avatar from '@mui/material/Avatar'
import { MOCK_PROFILES } from '../constants/mock/profile'
import './UserProfilePage.css'

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

  // Renders Banner
  let banner = (user) => {
    return (
      <>
        <div className="container-fluid banner_bg">
          <img
            src={user[0].profile_picture_url ?? profile_picture_placeholder}
            alt=""
            class="img-fluid rounded-circle start m-auto float-left"
            width="150px"
            height="150px"
          />
        </div>
        <div className="container-fluid banner_bg">
          <p className="text-center Container-fluid m-0 p-0 text-white">
            {user[0].username}{' '}
          </p>
        </div>
      </>
    )
  }
  //render Resume Navbar
  let resumeNavBar = () => {
    return (
      <>
        <div className="tab">
          <button className="tablinks">Details</button>
          <button className="tablinks">Portfolio</button>
          <button className="tablinks">Resume</button>
        </div>
      </>
    )
  }
  //Renders About Me
  let aboutMe = () => {
    return (
      <>
        <div className="container_a">
          <div className="lines_a">
            <div className="sectionTitle_a">About Me</div>
          </div>
        </div>
      </>
    )
  }
  //Renders workExperience
  let workExperience = () => {
    return (
      <>
        <div className="container_w">
          <div className="lines_w">
            <div className="sectionTitle_w">Work Experience</div>
          </div>
        </div>
      </>
    )
  }
  //Renders Project
  let project = () => {
    return (
      <>
        <div className="container_p">
          <div className="lines_p">
            <div className="sectionTitle_p">Project</div>
          </div>
        </div>
      </>
    )
  }

  let userView = function (user, profile) {
    return (
      <>
        {banner(user)}
        <div className="resume_bg">
          {resumeNavBar()}
          {aboutMe()}
          {workExperience()}
          {project()}
        </div>
      </>
    )
  }

  return (
    <div className="col-12 col-md-12 col-lg-12">
      {userView(displayedUser, displayeProfile)}
    </div>
  )
}

export default UserProfilePage
