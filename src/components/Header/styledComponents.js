import styled from 'styled-components'
import {Link} from 'react-router-dom'

/* Logout popup styling */

export const DesktopLogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${props => (props.darkMode ? '#f1f1f1' : '#3b82f6')};
  color: ${props => (props.darkMode ? '#f1f1f1' : '#3b82f6')};
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  @media all and (max-width: 767px) {
    display: none;
  }
`

export const MobileLogoutButton = styled.button`
    border : none;
    background-color : transparent;
    cursor : pointer;
    display : none;
    @media all and (max-width:767px){
        display : block;
        color : ${props => (props.darkMode ? '#f1f1f1' : '#000000')}
        font-size :20px;
    }
`

export const LogoutPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
  width: 400px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  border-radius: 16px;

  @media screen and (max-width:767px){
      width : 350px
  }
}
`

export const PopUpHeading = styled.p`
  color: ${props => (props.darkMode ? '#f1f1f1' : '#3b82f6')};
  font-size: 20px;
  margin-bottom: 26px;
  text-align: center;
  font-weight: 500;
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d7dfe9;
  margin-right: 20px;
  font-weight: 500;
  border-radius: 6px;
  color: #d7dfe9;
  cursor: pointer;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  font-size: 16px;
  border: none;
  margin-right: 10px;
  font-weight: 500;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
`

/* logout popup styling ends */

/* mobile navbar list items container popup  HAMBURGER ICON */

export const MobileHamburgerBtn = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    border: none;
    margin-right: 14x;
    background-color: transparent;
    color: ${props => (props.darkMode ? '#f1f1f1' : '#181818')};
    display: block;
  }
`

export const MobileSideBarView = styled.div`
  width: 95%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`

export const CloseButton = styled.button`
  background: transparent;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#181818')};
  border: none;
  align-self: flex-end;
`

export const MobileSidebarList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  margin-top: 50px;
  width: 80%;
  padding: 0;
`

export const SidebarNavLink = styled(Link)`
  text-decoration: none;
`

export const SidebarListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: flex-start;
  width: 200px;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#181818')};
  background-color: ${props => props.bgColor};
`

export const SidebarListItemName = styled.p`
  margin-left: 10px;
  font-size: 26px;
`

/* navbar styling */

export const NavbarContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#231f20' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width : 100%
  padding: 10px;
`

export const NavbarLogo = styled.img`
  height: 100%;
  width: 150px;
`

export const NavbarListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

export const ThemeBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 24px;
  padding: 0;
  cursor: pointer;
  padding-top: 6px;
  @media screen and (max-width: 767px) {
    margin-right: 14px;
  }
`

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 24px;
  @media screen and (max-width: 767px) {
    display: none;
    margin-right: 14px;
  }
`
