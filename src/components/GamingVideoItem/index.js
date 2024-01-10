import {
  GamingVideoLink,
  GamingVideoListItem,
  GamingVideoImg,
  GamingVideoItemHeading,
  GamingVideoDescription,
} from './styledComponents'

import Nxtwatch from '../../context/Nxtwatch'

const GamingVideoItem = props => {
  const {gamingVideoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideoDetails

  return (
    <Nxtwatch.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <GamingVideoLink to={`/videos/${id}`}>
            <GamingVideoListItem>
              <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoItemHeading darkMode={darkMode}>
                {title}
              </GamingVideoItemHeading>
              <GamingVideoDescription>
                {viewCount} Watching Worldwide
              </GamingVideoDescription>
            </GamingVideoListItem>
          </GamingVideoLink>
        )
      }}
    </Nxtwatch.Consumer>
  )
}

export default GamingVideoItem
