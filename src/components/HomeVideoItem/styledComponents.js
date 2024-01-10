import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeVideoLink = styled(Link)`
  text-decoration: none;
`

export const HomeVideoListItem = styled.li`
  background-color: transparent;
  margin-left: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 280px;
  list-style-type: none;
  color: #909090;
  height: 350px;
  cursor: pointer;
  @media screen and (max-width: 567px) {
    width: 100%;
    margin-right: 0;
  }
  @media screen and (min-width: 568px and max-width:767px) {
    width: 45%;
    margin-right: 10px;
  }
`

export const HomeVideoImg = styled.img`
  width: 100%;
  height: 50%;
`

export const HomeVideoDetailsCon = styled.div`
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 50%;
  width: 100%;
`

export const VideoChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 8px 0 8px;
`

export const VideoDetailsCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`

export const VideoCardDetail = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 5px;
  color: #616e7c;
`
