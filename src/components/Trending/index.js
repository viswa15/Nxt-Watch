import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFirefoxBrowser} from 'react-icons/fa' /* trending icon */

import {
  TrendingVideosList,
  TrendingVideosBgContainer,
  TrendingVideosMainContainer,
  TrendingBannerContainer,
  TrendingBannerText,
  TrendingIconCon,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'
import SideBarView from '../SideBarView'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'
import Nxtwatch from '../../context/Nxtwatch'

const apiStatusInfo = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusInfo.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusInfo.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      options: 'GET',
    }
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        apiStatus: apiStatusInfo.success,
        trendingVideos: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusInfo.failure,
      })
    }
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader height={50} width={50} color="#4f46e5" type="ThreeDots" />
    </LoaderContainer>
  )

  renderTrendingVideosList = () => {
    const {trendingVideos} = this.state
    console.log(trendingVideos[0].title)
    return (
      <TrendingVideosList>
        {trendingVideos.map(each => (
          <TrendingVideoItem key={each.id} trendingVideoItemDetails={each} />
        ))}
      </TrendingVideosList>
    )
  }

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusInfo.success:
        return this.renderTrendingVideosList()
      case apiStatusInfo.failure:
        return <FailureView onRetry={this.onRetry} />
      case apiStatusInfo.inProgress:
        return this.renderLoader()
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
              <TrendingVideosBgContainer
                data-testid="trending"
                darkMode={darkMode}
              >
                <SideBarView />
                <TrendingVideosMainContainer>
                  <TrendingBannerContainer darkMode={darkMode}>
                    <TrendingIconCon darkMode={darkMode}>
                      <FaFirefoxBrowser size={40} color="#ff0b37" />
                    </TrendingIconCon>
                    <TrendingBannerText darkMode={darkMode}>
                      Trending
                    </TrendingBannerText>
                  </TrendingBannerContainer>
                  {this.renderResult()}
                </TrendingVideosMainContainer>
              </TrendingVideosBgContainer>
            </>
          )
        }}
      </Nxtwatch.Consumer>
    )
  }
}

export default Trending
