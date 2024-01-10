import styled from 'styled-components'

export const VideoBgCard = styled.div`
  width: 85vw;
  margin-left: 15vw;
  padding: 10px;
  background-color: transparent;
  min-height: 90vh;
  @media screen and (max-width: 567px) {
    width: 100vw;
    padding: 10px;
    margin-left: 0;
  }
`
export const VideoTitle = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const VideoCountDetail = styled.p`
  color: #909090;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const VideoButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const VideoBtn = styled.button`
  display: flex;
  align-self: center;
  margin-right: 7px;
  border: none;
  background: transparent;
  color: ${props => props.color};
  cursor: pointer;
`

export const VideoDetailsCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const VideoLogo = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 8px 0 8px;
`

export const VideoDetailsCon = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

export const VideoChannelTitle = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
`

export const VideoDescription = styled.p`
  margin-top: 13px;
  font-size: 16px;
  color: #606060;
`
