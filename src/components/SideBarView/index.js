import {IoMdHome} from 'react-icons/io' /* close icon,home icon */
import {FaFirefoxBrowser} from 'react-icons/fa' /* trending icon,night icon */
import {CgPlayListAdd} from 'react-icons/cg' /*  saved videos */
import {SiYoutubegaming} from 'react-icons/si'

import {
  DesktopSidebar,
  DesktopSidebarListItems,
  DesktopSidebarLink,
  DesktopSidebarListItem,
  DesktopSidebarListItemName,
  SidebarBottomContainer,
  BottomHeading,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  BottomContainerMsg,
} from './styledComponents'

import Nxtwatch from '../../context/Nxtwatch'

const SideBarView = () => (
  <Nxtwatch.Consumer>
    {value => {
      const {darkMode, activeTab, changeActiveTab} = value

      const onClickHomeTab = () => {
        changeActiveTab('Home')
      }

      const onClickTrendingTab = () => {
        changeActiveTab('Trending')
      }

      const onClickGamingTab = () => {
        changeActiveTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        changeActiveTab('SavedVideos')
      }

      const activeTabBgColor = darkMode
        ? '#475569'
        : '#cbd5e1' /* active tab background color */

      return (
        <DesktopSidebar darkMode={darkMode}>
          <DesktopSidebarListItems>
            <DesktopSidebarLink to="/">
              <DesktopSidebarListItem
                onClick={onClickHomeTab}
                bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
              >
                <IoMdHome
                  size={40}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <DesktopSidebarListItemName darkMode={darkMode}>
                  Home
                </DesktopSidebarListItemName>
              </DesktopSidebarListItem>
            </DesktopSidebarLink>
            <DesktopSidebarLink to="/trending">
              <DesktopSidebarListItem
                onClick={onClickTrendingTab}
                bgColor={activeTab === 'Trending' ? activeTabBgColor : 'none'}
              >
                <FaFirefoxBrowser
                  size={30}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <DesktopSidebarListItemName darkMode={darkMode}>
                  Trending
                </DesktopSidebarListItemName>
              </DesktopSidebarListItem>
            </DesktopSidebarLink>
            <DesktopSidebarLink to="/gaming">
              <DesktopSidebarListItem
                onClick={onClickGamingTab}
                bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
              >
                <SiYoutubegaming
                  size={30}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <DesktopSidebarListItemName darkMode={darkMode}>
                  Gaming
                </DesktopSidebarListItemName>
              </DesktopSidebarListItem>
            </DesktopSidebarLink>
            <DesktopSidebarLink to="/saved-videos">
              <DesktopSidebarListItem
                onClick={onClickSavedVideosTab}
                bgColor={
                  activeTab === 'SavedVideos' ? activeTabBgColor : 'none'
                }
              >
                <CgPlayListAdd
                  size={40}
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
                />
                <DesktopSidebarListItemName darkMode={darkMode}>
                  Saved videos
                </DesktopSidebarListItemName>
              </DesktopSidebarListItem>
            </DesktopSidebarLink>
          </DesktopSidebarListItems>
          <SidebarBottomContainer>
            <BottomHeading darkMode={darkMode}>CONTACT US</BottomHeading>
            <SocialMediaIconsContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <BottomContainerMsg darkMode={darkMode}>
              Enjoy! Now to see your channels and recommendations!
            </BottomContainerMsg>
          </SidebarBottomContainer>
        </DesktopSidebar>
      )
    }}
  </Nxtwatch.Consumer>
)

export default SideBarView
