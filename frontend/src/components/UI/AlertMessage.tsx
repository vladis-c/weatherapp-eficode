import React from "react"

import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert"
import { Snackbar } from "@mui/material"
import ClickAwayListener from '@mui/material/ClickAwayListener'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type AlertMessageProps = {
  alertIsOpen: boolean
  onCloseAlert: () => void
  severity: AlertColor
  message: string
}

const AlertMessage = ({
  alertIsOpen,
  message,
  onCloseAlert,
  severity

}: AlertMessageProps) => {

  return (
    <ClickAwayListener
    onClickAway={onCloseAlert}
  >
    <Snackbar
      open={alertIsOpen}
      autoHideDuration={4000}
      onClose={onCloseAlert}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        marginBottom: 10
      }}
    >
      <Alert
        onClose={onCloseAlert}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
    </ClickAwayListener>
  )
}

export default AlertMessage
