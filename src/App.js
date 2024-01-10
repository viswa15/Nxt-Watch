import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import Nxtwatch from './context/Nxtwatch'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    darkMode: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  changeActiveTab = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {darkMode, activeTab, savedVideos} = this.state
    return (
      <Nxtwatch.Provider
        value={{
          darkMode,
          activeTab,
          savedVideos,
          changeTheme: this.changeTheme,
          changeActiveTab: this.changeActiveTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Nxtwatch.Provider>
    )
  }
}

export default App
