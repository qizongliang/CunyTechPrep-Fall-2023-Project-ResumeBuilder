import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function AboutMe(props) {
  let data = props.userInfo
  console.log(data)
  return (
    <>
      <Typography variant="h3" component="h2">
        About Me
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>{data.description ? 'description' : data.description}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Education</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
