import {Component} from 'react'
import Cookies from 'js-cookie'

import {VideoItemDetailsBgContainer} from './styledComponents'

import FailureView from '../FailureView'
import LoaderView from '../LoaderView'
import Header from '../Header'
import SideBarView from '../SideBarView'
import VideoItemDetailsCard from '../VideoItemDetailsCard'

import Nxtwatch from '../../context/Nxtwatch'

const apiStatusInfo = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemData: {},
    apiStatus: apiStatusInfo.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
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
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoItemData: formattedData,
        apiStatus: apiStatusInfo.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusInfo.failure,
      })
    }
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  likeBtnClicked = () => {
    const {isDisLiked} = this.state
    if (isDisLiked === true) {
      this.setState({
        isLiked: true,
        isDisLiked: false,
      })
    } else {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
      }))
    }
  }

  dislikeBtnClicked = () => {
    const {isLiked} = this.state
    if (isLiked === true) {
      this.setState({
        isDisLiked: true,
        isLiked: false,
      })
    } else {
      this.setState(prevState => ({
        isDisLiked: !prevState.isDisLiked,
      }))
    }
  }

  renderResult = () => {
    const {videoItemData, apiStatus, isDisLiked, isLiked} = this.state
    switch (apiStatus) {
      case apiStatusInfo.success:
        return (
          <VideoItemDetailsCard
            videoItemDetails={videoItemData}
            likeBtnClicked={this.likeBtnClicked}
            dislikeBtnClicked={this.dislikeBtnClicked}
            isLiked={isLiked}
            isDisLiked={isDisLiked}
          />
        )
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
          console.log(darkMode)

          return (
            <>
              <Header />
              <VideoItemDetailsBgContainer
                data-testid="videoItemDetails"
                darkMode={darkMode}
              >
                <SideBarView />
                {this.renderResult()}
              </VideoItemDetailsBgContainer>
            </>
          )
        }}
      </Nxtwatch.Consumer>
    )
  }
}

export default VideoItemDetails
