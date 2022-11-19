import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import { MOCK_USERS } from '../constants/mock/users'
import Avatar from '@mui/material/Avatar'
import { MOCK_PROFILES } from '../constants/mock/profile'
import './UserProfilePage.css'
import { width } from '@mui/system'

function UserProfilePage() {
  let displayedUser = MOCK_USERS.filter((user) => user.id <= 1)
  let displayedProfile = MOCK_PROFILES.ButterRiolu
  const profile_picture_placeholder =
    'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'

  const [Biography, setBiography] = useState(
    displayedProfile.details['About Me'].biography,
  )
  const bioChange = (txt) => {
    setBiography(txt)
  }

  const [Iseditmode, setIseditmode] = useState(false)
  // Renders Banner
  let banner = (user) => {
    return (
      <>
        <div className="container-fluid banner_bg">
          <img
            src={user[0].profile_picture_url ?? profile_picture_placeholder}
            alt=""
            className="img-fluid rounded-circle start m-auto float-left"
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
  //Renders Bullets List
  let schools = (schools) => {
    const schoolStyle = {
      padding: '0',
      margin: '0',
      border: '0',
    }
    return schools.map((s, i) => (
      <p style={schoolStyle} key={i}>
        {s}
      </p>
    ))
  }
  //Renders About Me
  let aboutMe = (profile, hookfcn) => {
    let biography = Biography
    let education = profile.details['About Me'].education
    const imgstyle = {
      width: '25px',
      height: '25px',
      cursor: 'pointer',
      float: 'right',
    }
    const handleBiographySubmit = (event) => {
      event.preventDefault()
      let upDatedBio = event.target.description.value
      console.log(event.target.description.value)
      bioChange(upDatedBio)
      setIseditmode(!Iseditmode)
      event.target.reset()
    }
    return (
      <>
        <div className="container_a">
          <div className="lines_a">
            <div className="sectionTitle_a">About Me</div>
          </div>
        </div>
        <div className="container_about">
          {!Iseditmode ? (
            <>
              <div className="description_a">
                {biography}

                <img
                  onClick={() => setIseditmode(!Iseditmode)}
                  style={imgstyle}
                  src="https://www.pngitem.com/pimgs/m/148-1489006_pencil-icon-png-free-transparent-png.png"
                  alt="https://www.pngitem.com/pimgs/m/148-1489006_pencil-icon-png-free-transparent-png.png"
                />
              </div>
            </>
          ) : (
            <form
              className="description_a_nb"
              onSubmit={(e) => {
                handleBiographySubmit(e)
              }}
            >
              <textarea
                className="form_a"
                type="text"
                name="description"
                defaultValue={biography}
              />
              <button type="submit">Submit</button>
            </form>
          )}

          <div className="education_a">
            <h5>
              <a href="https://hunter.cuny.edu/">Education</a>
            </h5>
            {schools(education)}
          </div>
        </div>
      </>
    )
  }
  //Renders Bullets List
  let bullets = (bullets) => {
    return bullets.map((b, i) => <p key={i}>{b}</p>)
  }

  //Renders workExperience
  let workExperience = (profile) => {
    let workExpList = profile.details['Work Experience']
    let validateYear = (year) => {
      return year != null
    }
    return (
      <>
        <div className="container_w">
          <div className="lines_w">
            <div className="sectionTitle_w">Work Experience</div>
          </div>
        </div>
        {workExpList.map((work) => {
          return (
            <div key={work.id} className="container_workExp">
              <h5 className="workExp_title">{work.job_title}</h5>
              {validateYear(work.end_year) ? (
                <h5 className="workExp_date">
                  {work.start_month +
                    ' ' +
                    work.start_year +
                    ' ' +
                    work.end_year +
                    ' ' +
                    work.end_month}
                </h5>
              ) : (
                <h5 className="workExp_date">
                  {work.start_month + ' ' + work.start_year + ' - Present'}
                </h5>
              )}
              <br />
              <br />
              {bullets(work.bullets)}
            </div>
          )
        })}
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
          {aboutMe(profile)}
          {workExperience(profile, bioChange)}
          {project()}
        </div>
      </>
    )
  }

  return (
    <div className="col-12 col-md-12 col-lg-12">
      {userView(displayedUser, displayedProfile)}
    </div>
  )
}

export default UserProfilePage
