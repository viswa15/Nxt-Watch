import styled from 'styled-components'
import {Link} from 'react-router-dom'

/* desktop sidebar styling */

export const DesktopSidebar = styled.div`
  background-color: ${props => (props.darkMode ? '#231f20' : '#ffffff')};
  height: 90vh;
  margin-top: 10vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const DesktopSidebarListItems = styled.ul`
  width: 100%;
  margin-top: 40px;
  padding: 0 0 0 6px;
`

export const DesktopSidebarLink = styled(Link)`
  text-decoration: none;
`

export const DesktopSidebarListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 0;
  height: 70px;
  cursor: pointer;
`

export const DesktopSidebarListItemName = styled.p`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#231f20')};
  font-size: 25px;
  margin-left: 14px;
`

export const SidebarBottomContainer = styled.div`
  padding: 5px;
  align-self: flex-end;
  width: 100%;
`

export const BottomHeading = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-left: 8px;
`
export const SocialMediaIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
`

export const BottomContainerMsg = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 16px;
`
