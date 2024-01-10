import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi' /* mobile nav-options open icon */
import {IoMdClose, IoMdHome} from 'react-icons/io' /* close icon,home icon */
import {
  FaFirefoxBrowser,
  FaMoon,
} from 'react-icons/fa' /* trending icon,night icon */
import {IoSunnyOutline, IoLogOutOutline} from 'react-icons/io5' /* sun icon */
import {CgPlayListAdd} from 'react-icons/cg' /*  saved videos */
import {SiYoutubegaming} from 'react-icons/si'

import {
  DesktopLogoutButton,
  MobileLogoutButton,
  LogoutPopupContainer,
  PopUpHeading,
  PopupButtonsContainer,
  CancelBtn,
  ConfirmBtn,
  MobileHamburgerBtn,
  MobileSideBarView,
  CloseButton,
  MobileSidebarList,
  SidebarNavLink,
  SidebarListItem,
  SidebarListItemName,
  NavbarContainer,
  NavbarLogo,
  NavbarListItems,
  ThemeBtn,
  ProfileImg,
} from './styledComponents'
import './index.css'

import NxtWatch from '../../context/Nxtwatch'

const Header = props => {
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatch.Consumer>
      {value => {
        const {darkMode, changeTheme, activeTab, changeActiveTab} = value

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

        /*  Mobile view Hamburger menu icon which on click leads to mobile view navbar */
        const overlayStyles = {
          backgroundColor: darkMode ? '#181818' : '#ffffff',
        }
        const MobileViewSideBarView = () => (
          <Popup
            modal
            trigger={
              <MobileHamburgerBtn
                type="button"
                aria-label="icon"
                darkMode={darkMode}
              >
                <GiHamburgerMenu
                  size={30}
                  color={darkMode ? '#f1f1f1' : '#181818'}
                />
              </MobileHamburgerBtn>
            }
            overlayStyle={overlayStyles}
            className="mobile-popup-content"
          >
            {close => (
              <MobileSideBarView darkMode={darkMode}>
                <CloseButton
                  type="button"
                  aria-label="icon"
                  onClick={() => close()}
                  darkMode={darkMode}
                >
                  <IoMdClose size={30} />
                </CloseButton>
                <MobileSidebarList>
                  <SidebarNavLink to="/" onClick={() => close()}>
                    <SidebarListItem
                      darkMode={darkMode}
                      onClick={onClickHomeTab}
                      bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                    >
                      <IoMdHome
                        size={30}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <SidebarListItemName>Home</SidebarListItemName>
                    </SidebarListItem>
                  </SidebarNavLink>
                  <SidebarNavLink to="/trending" onClick={() => close()}>
                    <SidebarListItem
                      darkMode={darkMode}
                      onClick={onClickTrendingTab}
                      bgColor={
                        activeTab === 'Trending' ? activeTabBgColor : 'none'
                      }
                    >
                      <FaFirefoxBrowser
                        size={30}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <SidebarListItemName>Trending</SidebarListItemName>
                    </SidebarListItem>
                  </SidebarNavLink>
                  <SidebarNavLink to="/gaming" onClick={() => close()}>
                    <SidebarListItem
                      darkMode={darkMode}
                      onClick={onClickGamingTab}
                      bgColor={
                        activeTab === 'Gaming' ? activeTabBgColor : 'none'
                      }
                    >
                      <SiYoutubegaming
                        size={30}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <SidebarListItemName>Gaming</SidebarListItemName>
                    </SidebarListItem>
                  </SidebarNavLink>
                  <SidebarNavLink to="/saved-videos" onClick={() => close()}>
                    <SidebarListItem
                      darkMode={darkMode}
                      onClick={onClickSavedVideosTab}
                      bgColor={
                        activeTab === 'SavedVideos' ? activeTabBgColor : 'none'
                      }
                    >
                      <CgPlayListAdd
                        size={30}
                        color={
                          activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'
                        }
                      />
                      <SidebarListItemName>Saved videos</SidebarListItemName>
                    </SidebarListItem>
                  </SidebarNavLink>
                </MobileSidebarList>
              </MobileSideBarView>
            )}
          </Popup>
        )

        const LogoutPopup = () => (
          <div>
            <Popup
              modal
              trigger={
                <DesktopLogoutButton type="button" darkMode={darkMode}>
                  Logout
                </DesktopLogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <LogoutPopupContainer darkMode={darkMode}>
                  <PopUpHeading darkMode={darkMode}>
                    Are you sure, you want to logout
                  </PopUpHeading>
                  <PopupButtonsContainer darkMode={darkMode}>
                    <CancelBtn
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                    >
                      Cancel
                    </CancelBtn>
                    <ConfirmBtn type="button" onClick={onClickLogoutBtn}>
                      Confirm
                    </ConfirmBtn>
                  </PopupButtonsContainer>
                </LogoutPopupContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <MobileLogoutButton type="button" darkMode={darkMode}>
                  <IoLogOutOutline
                    size={32}
                    color={darkMode ? '#f1f1f1' : '#181818'}
                  />
                </MobileLogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <LogoutPopupContainer darkMode={darkMode}>
                  <PopUpHeading darkMode={darkMode}>
                    Are you sure, you want to logout
                  </PopUpHeading>
                  <PopupButtonsContainer darkMode={darkMode}>
                    <CancelBtn
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                    >
                      Cancel
                    </CancelBtn>
                    <ConfirmBtn type="button" onClick={onClickLogoutBtn}>
                      Confirm
                    </ConfirmBtn>
                  </PopupButtonsContainer>
                </LogoutPopupContainer>
              )}
            </Popup>
          </div>
        )

        const onClickChangeTheme = () => {
          changeTheme()
        }

        const resultantThemeIcon = darkMode ? (
          <IoSunnyOutline size={30} color="#f1f1f1" padding="12px" />
        ) : (
          <FaMoon size={30} color="#181818" />
        )

        return (
          <>
            <NavbarContainer darkMode={darkMode}>
              <Link to="/">
                <NavbarLogo
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <NavbarListItems>
                <ThemeBtn
                  type="button"
                  aria-label="icon"
                  darkMode={darkMode}
                  data-testid="theme"
                  onClick={onClickChangeTheme}
                >
                  {resultantThemeIcon}
                </ThemeBtn>
                {MobileViewSideBarView()}
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                {LogoutPopup()}
              </NavbarListItems>
            </NavbarContainer>
          </>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default withRouter(Header)
