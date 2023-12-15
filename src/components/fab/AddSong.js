"use client"
import React from "react"
import PropTypes from "prop-types"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import { connect } from "react-redux"
import { addSongs } from "../../actions/SongActions";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: "110px",
    right: "25px",
    zIndex: 3000,
  },
}))

function AddSong(props) {
  const classes = useStyles()

  return (
    <Fab
      color="secondary"
      aria-label="Add"
      component="label"
      htmlFor="song-input"
      className={classes.root}
    >
      <input
        style={{ display: "none" }}
        id="song-input"
        type="file"
        onChange={e => {
          props.addSongs(e.currentTarget.files)
        }}
        multiple
        accept="audio/mp3"
      />
      <AddIcon />
    </Fab>
  )
}

AddSong.propTypes = {
  addSongs: PropTypes.func.isRequired,
}

export default connect(null, { addSongs })(AddSong)
