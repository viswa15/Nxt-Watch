import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosMainContainer = styled.div`
  width: 85vw;
  margin-left: 15vw;
  margin-top: 10vh;
  min-height: 90vh;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const SavedVideosBannerContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  background: ${props => (props.darkMode ? '#000000' : '#f1f5f9')};
  @media screen and (max-width: 567px) {
    height: 100px;
  }
`

export const SavedVideosIconCon = styled.div`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${props => (props.darkMode ? '#181818' : '#d7dfe9')};
  margin-right: 14px;
  padding: 14px;
  margin-left: 30px;
`

export const SavedVideosBannerText = styled.h1`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 30px;
  font-weight: 500;
`

export const SavedVideosList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 20px;
  @media screen and (max-width: 567px) {
    margin: 10px;
  }
`

export const NoSavedVideosView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoSavedVideosImg = styled.img`
  width: 50%;
  height: 380px;
  margin-bottom: 20px;
  @media screen and (max-width: 567px) {
    width: 85%;
    height: 260px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-size: 38px;
  margin-bottom: 16px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`

export const NoSavedVideosDescription = styled.p`
  color: ${props => (props.darkMode ? '#e2e8f0' : '#475569')};
  font-size: 22px;
`
