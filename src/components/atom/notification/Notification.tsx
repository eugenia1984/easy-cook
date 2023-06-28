import React from 'react'
import {
  Alert,
  Typography,
  Snackbar
} from '@mui/material'
import { NotificationProps } from './Notification.d'

export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={ { vertical: "top", horizontal: "center" } }
      autoHideDuration={ 4000 }
      open={ open }
      onClose={ handleClose }
    >
      <Alert
        onClose={ handleClose }
        severity={ severity }
      >
        <Typography>{ msg }</Typography>
      </Alert>
    </Snackbar>
  )
}