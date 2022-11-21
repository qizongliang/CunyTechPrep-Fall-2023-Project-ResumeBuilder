import * as React from 'react'
import { Typography } from '@mui/material'
import WorkExperienceItem from './workExperienceItem'

export default function WorkExperience(props) {
  console.log(props.items)
  let workExpItems = props.workItems
  let displayWorkItem = workExpItems.map((item) => {
    return <WorkExperienceItem key={item.id} info={item} />
  })

  return (
    <>
      <Typography variant="h3" component="h2">
        Work Experience
      </Typography>
      {displayWorkItem}
    </>
  )
}
