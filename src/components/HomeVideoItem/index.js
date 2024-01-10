import {formatDistanceToNow} from 'date-fns'

import {
  HomeVideoLink,
  HomeVideoListItem,
  HomeVideoImg,
  HomeVideoDetailsCon,
  VideoChannelLogo,
  VideoDetailsCard,
  VideoTitle,
  VideoCardDetail,
} from './styledComponents'

import Nxtwatch from '../../context/Nxtwatch'

const HomeVideoItem = props => {
  const {homeVideoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    channel,
    publishedAt,
  } = homeVideoDetails
  const publishedTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <Nxtwatch.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <HomeVideoLink to={`/videos/${id}`}>
            <HomeVideoListItem darkMode={darkMode}>
              <HomeVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <HomeVideoDetailsCon>
                <VideoChannelLogo
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDetailsCard>
                  <VideoTitle darkMode={darkMode}>{title}</VideoTitle>
                  <VideoCardDetail>{channel.name}</VideoCardDetail>
                  <VideoCardDetail>
                    {viewCount} views . {publishedTime} ago
                  </VideoCardDetail>
                </VideoDetailsCard>
              </HomeVideoDetailsCon>
            </HomeVideoListItem>
          </HomeVideoLink>
        )
      }}
    </Nxtwatch.Consumer>
  )
}

export default HomeVideoItem
