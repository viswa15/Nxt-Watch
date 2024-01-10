import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideoLink = styled(Link)`
  text-decoration: none;
`

export const GamingVideoListItem = styled.li`
  margin-right: 20px;
  margin-bottom: 40px;
  width: 250px;
  list-style-type: none;
  height: 350px;
  background-color: transparent;
  @media screen and (max-width: 567px) {
    width: 140px;
    height: 270px;
  }
`

export const GamingVideoImg = styled.img`
  border-radius: 16px;
  margin-bottom: 2px;
  width: 100%;
  height: 75%;
  @media screen and (max-width: 567px) {
    height: 70%;
    margin-bottom: 0;
  }
`

export const GamingVideoItemHeading = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 24px;
  @media screen and (max-width: 567px) {
    font-size: 16px;
  }
`

export const GamingVideoDescription = styled.p`
  color: #475569;
  font-size: 16px;
  @media screen and (max-width: 567px) {
    font-size: 12px;
  }
`
