import {formatDistanceToNow} from 'date-fns'

import {
  TrendingVideoLink,
  TrendingVideoListItem,
  TrendingVideoImg,
  TrendingVideoItemCard,
  TrendingVideoChannelLogo,
  TrendingVideoItemDetailsCon,
  TrendingVideoTitle,
  TrendingVideoItemDetailsCard,
  TrendingVideoItemDetail,
  Dot,
} from './styledComponents'
import Nxtwatch from '../../context/Nxtwatch'

const TrendingVideoItem = props => {
  const {trendingVideoItemDetails} = props
  const {
    id,
    title,
    channel,
    thumbnailUrl,
    viewCount,
    publishedAt,
  } = trendingVideoItemDetails
  const publishedTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <Nxtwatch.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <TrendingVideoLink to={`/videos/${id}`}>
            <TrendingVideoListItem>
              <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoItemCard>
                <TrendingVideoChannelLogo
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <TrendingVideoItemDetailsCon>
                  <TrendingVideoTitle darkMode={darkMode}>
                    {title}
                  </TrendingVideoTitle>
                  <TrendingVideoItemDetailsCard>
                    <TrendingVideoItemDetail>
                      {channel.name} <Dot>.</Dot>
                    </TrendingVideoItemDetail>
                    <TrendingVideoItemDetail>
                      {viewCount} views . {publishedTime}
                    </TrendingVideoItemDetail>
                  </TrendingVideoItemDetailsCard>
                </TrendingVideoItemDetailsCon>
              </TrendingVideoItemCard>
            </TrendingVideoListItem>
          </TrendingVideoLink>
        )
      }}
    </Nxtwatch.Consumer>
  )
}

export default TrendingVideoItem
