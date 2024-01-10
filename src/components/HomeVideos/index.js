import {
  HomeVideosList,
  EmptyVideosView,
  EmptyVideosImage,
  EmptyViewHeading,
  EmptyViewDescription,
  EmptyViewRetryBtn,
} from './styledComponents'

import HomeVideoItem from '../HomeVideoItem'

import Nxtwatch from '../../context/Nxtwatch'

const HomeVideos = props => {
  const {videosList, onRetry} = props
  const onClickRetryBtn = () => {
    onRetry()
  }
  return (
    <Nxtwatch.Consumer>
      {value => {
        const {darkMode} = value
        return videosList.length > 0 ? (
          <HomeVideosList>
            {videosList.map(each => (
              <HomeVideoItem key={each.id} homeVideoDetails={each} />
            ))}
          </HomeVideosList>
        ) : (
          <EmptyVideosView>
            <EmptyVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <EmptyViewHeading color={darkMode ? '#ffffff' : '#231f20'}>
              No Search Results Found
            </EmptyViewHeading>
            <EmptyViewDescription>
              Try Different key words or remove search filter
            </EmptyViewDescription>
            <EmptyViewRetryBtn type="button" onClick={onClickRetryBtn}>
              Retry
            </EmptyViewRetryBtn>
          </EmptyVideosView>
        )
      }}
    </Nxtwatch.Consumer>
  )
}

export default HomeVideos
