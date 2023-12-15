"use client"
import React from "react"
import { MuiThemeProvider, createTheme } from "@mui/material/styles"

import deepPurple from "@mui/material/colors"
import deepOrange from "@mui/material/colors"

import { Provider } from "react-redux"

import  Musicplayer  from "../Musicplayer/page"
import store from "../../store"
import mediaNotification from "../../utils/media-session"

const IndexPage = props => {
  const muiTheme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: deepOrange,
    },
  })

  mediaNotification.setStore(store)

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <Musicplayer />
      </MuiThemeProvider>
    </Provider>
  )
}

export default IndexPage
