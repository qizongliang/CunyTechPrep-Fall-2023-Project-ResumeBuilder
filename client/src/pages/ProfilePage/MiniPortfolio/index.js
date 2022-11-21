import React from 'react'
import AboutMe from './AboutMe/aboutMe'
import WorkExperience from './WorkExperience/workExperience'

export default function MiniPortfolio(props) {
  return (
    <>
      <AboutMe userInfo={props.userInfo} />
      <WorkExperience workItems={props.workExperiences} />
    </>
  )
}
