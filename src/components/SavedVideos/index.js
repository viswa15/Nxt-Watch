import {CgPlayListAdd} from 'react-icons/cg' /*  saved videos */

import {
  SavedVideosBgContainer,
  SavedVideosMainContainer,
  SavedVideosBannerContainer,
  SavedVideosIconCon,
  SavedVideosBannerText,
  SavedVideosList,
  NoSavedVideosView,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

import Header from '../Header'
import SideBarView from '../SideBarView'
import TrendingVideoItem from '../TrendingVideoItem'
import Nxtwatch from '../../context/Nxtwatch'

const SavedVideos = () => (
  <Nxtwatch.Consumer>
    {value => {
      const {darkMode, savedVideos} = value
      return (
        <>
          <Header />
          <SavedVideosBgContainer data-testid="savedVideos" darkMode={darkMode}>
            <SideBarView />
            <SavedVideosMainContainer>
              {savedVideos.length > 0 ? (
                <>
                  <SavedVideosBannerContainer darkMode={darkMode}>
                    <SavedVideosIconCon darkMode={darkMode}>
                      <CgPlayListAdd size={40} color="#ff0b37" />
                    </SavedVideosIconCon>
                    <SavedVideosBannerText darkMode={darkMode}>
                      Saved Videos
                    </SavedVideosBannerText>
                  </SavedVideosBannerContainer>
                  <SavedVideosList>
                    {savedVideos.map(each => (
                      <TrendingVideoItem
                        key={each.id}
                        trendingVideoItemDetails={each}
                      />
                    ))}
                  </SavedVideosList>
                </>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading darkMode={darkMode}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosDescription darkMode={darkMode}>
                    You can save your videos while watching them
                  </NoSavedVideosDescription>
                </NoSavedVideosView>
              )}
            </SavedVideosMainContainer>
          </SavedVideosBgContainer>
        </>
      )
    }}
  </Nxtwatch.Consumer>
)

export default SavedVideos
