"use client"
import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import fade from '@mui/material/Fade';
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Divider from "@mui/material/Divider"

import HeartIcon from "@mui/icons-material/FavoriteSharp"
import PlayListIcon from "@mui/icons-material/List"
import HomeIcon from "@mui/icons-material/Home"
import SettingsIcon from "@mui/icons-material/Settings"
import MenuIcon from "@mui/icons-material/Menu"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Close"

// import Logo from "../logo"
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0),
    },
  },
  title: {
    flexGrow: 1,
    color: "#f4f4f4",
    textDecoration: "none",
    "&:active": {
      backgroundColor: "transparent",
    },
  },
  list: {
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 230,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "52%",
    },
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& button": {
      color: "#fff",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}))

export default function Header(props) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const classes = useStyles()
  const menuOptions = [
    {
      option: "Home",
      page: "HOME_PAGE",
      icon: <HomeIcon />,
    },
    {
      option: "Favourites",
      page: "NOW_PLAYING_PAGE",
      icon: <HeartIcon />,
    },
    {
      option: "Playlists",
      page: "PLAYLIST_PAGE",
      icon: <PlayListIcon />,
    },
    {
      option: "Settings",
      page: "SETTINGS_PAGE",
      icon: <SettingsIcon />,
    },
  ]

  const toggleDrawer = event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setOpen(prevState => !prevState)
  }

  const searchChange = e => {
    setSearchTerm(e.target.value)
    const { setSearchTerm: setGlobalSearchTerm } = props
    setGlobalSearchTerm(e.target.value.trim())
  }

  const clearInput = () => {
    const { setSearchTerm: setGlobalSearchTerm } = props
    setSearchTerm("")
    setGlobalSearchTerm("")
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" className={classes.title}>
            <Typography variant="h6">Music App</Typography>
          </Link>

          {props.noSearch ? (
            ""
          ) : (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                {searchTerm.trim().length > 0 ? (
                  <IconButton onClick={clearInput}>
                    <ClearIcon />
                  </IconButton>
                ) : (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                )}
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={searchChange}
                value={searchTerm}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div
          style={{
            minHeight: "100px",
            justifyContent: "center",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Logo /> */}
        </div>
        <Divider />
        {menuOptions.map(option => (
          <ListItem key={option.option} button className={classes.list}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.option}</ListItemText>
          </ListItem>
        ))}
      </SwipeableDrawer>
    </div>
  )
}
