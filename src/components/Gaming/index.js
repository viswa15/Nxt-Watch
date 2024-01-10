import {Component} from 'react'
import Cookies from 'js-cookie'

import {CgPlayListAdd} from 'react-icons/cg' /*  saved videos */

import {
  GamingBgContainer,
  GamingMainContainer,
  GamingBannerContainer,
  GamingIconCon,
  GamingBannerText,
  GamingVideosList,
} from './styledComponents'

import Header from '../Header'
import SideBarView from '../SideBarView'
import GamingVideoItem from '../GamingVideoItem'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import Nxtwatch from '../../context/Nxtwatch'

const apiStatusInfo = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusInfo.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusInfo.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusInfo.success,
        gamingVideos: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusInfo.failure,
      })
    }
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.map(each => (
          <GamingVideoItem key={each.id} gamingVideoDetails={each} />
        ))}
      </GamingVideosList>
    )
  }

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusInfo.success:
        return this.renderGamingVideos()
      case apiStatusInfo.failure:
        return <FailureView onRetry={this.onRetry} />
      case apiStatusInfo.inProgress:
        return <LoaderView />
      default:
        return ''
    }
  }

  render() {
    return (
      <Nxtwatch.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <GamingBgContainer>
                <SideBarView />
                <GamingMainContainer darkMode={darkMode} data-testid="gaming">
                  <GamingBannerContainer darkMode={darkMode}>
                    <GamingIconCon darkMode={darkMode}>
                      <CgPlayListAdd size={40} color="#ff0b37" />
                    </GamingIconCon>
                    <GamingBannerText darkMode={darkMode}>
                      Gaming
                    </GamingBannerText>
                  </GamingBannerContainer>
                  {this.renderResult()}
                </GamingMainContainer>
              </GamingBgContainer>
            </>
          )
        }}
      </Nxtwatch.Consumer>
    )
  }
}

export default Gaming
