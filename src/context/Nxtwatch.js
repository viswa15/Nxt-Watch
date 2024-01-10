import React from 'react'

const Nxtwatch = React.createContext({
  darkMode: false,
  changeTheme: () => {},
  activeTab: 'Home',
  changeActiveTab: () => {},
  savedVideos: [],
  addVideo: () => {},
})

export default Nxtwatch
