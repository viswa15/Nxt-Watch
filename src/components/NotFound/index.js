import Header from '../Header'
import SideBarView from '../SideBarView'
import Nxtwatch from '../../context/Nxtwatch'
import {
  NotFoundBackgroundContainer,
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <Nxtwatch.Consumer>
    {value => {
      const {darkMode} = value
      const bgColor = darkMode ? '#181818' : '#f9f9f9'
      const headingColor = darkMode ? '#f1f5f9' : '#1e293b'
      const noteColor = darkMode ? '#e2e8f0' : '#475569'

      const NotFoundImage = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundBackgroundContainer bgColor={bgColor}>
            <SideBarView />
            <NotFoundContainer>
              <NotFoundVideosView>
                <NotFoundVideosImage src={NotFoundImage} alt="not found" />
                <NotFoundVideosHeading headingColor={headingColor}>
                  Page Not Found
                </NotFoundVideosHeading>
                <NotFoundVideosNote noteColor={noteColor}>
                  We are sorry, the page you requested could not be found.
                </NotFoundVideosNote>
              </NotFoundVideosView>
            </NotFoundContainer>
          </NotFoundBackgroundContainer>
        </>
      )
    }}
  </Nxtwatch.Consumer>
)

export default NotFound
