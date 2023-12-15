import React from "react"
import { makeStyles } from "@mui/styles"
import { Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import MoreVert from "@mui/icons-material/MoreVert"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    zIndex: 500,
    position: "fixed",
    top: "0",
    left: "0px",
    width: "100%",
    height: "80px",
  },
  noPadding: {
    padding: "0px",
  },
  paperTop: {
    display: "flex",
    padding: "15px",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: 600,
    color: "#404040",
  },
  square: {
    width: "45px",
    height: "50px",
  },
}))

function BottomPlayer(props) {
  const classes = useStyles()

  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.paperTop}>
          <IconButton
            aria-label="close song modal"
            onClick={props.toggleDrawer}
            className={classes.noPadding}
          >
            <KeyboardArrowDownIcon style={{ fontSize: "30px" }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Now Playing
          </Typography>
          <IconButton className={classes.noPadding} aria-label="more info">
            <MoreVert style={{ fontSize: "25px" }} />
          </IconButton>
        </div>
      </Paper>
    </>
  )
}

export default BottomPlayer
