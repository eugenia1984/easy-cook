import React from 'react'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

interface LoaderProps {
  title?: string
}

export const Loader: React.FC<LoaderProps> = ({ title }) => {

  return (
    <Box sx={ {
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: 'primaryBackground',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    } }>
      <CircularProgress />
      { title && <Typography mt={2} variant="h4">{ title }</Typography> }
    </Box>
  )
}