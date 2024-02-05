import styled from 'styled-components'

export const TrendingVideosBgContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingVideosMainContainer = styled.div`
  width: 85vw;
  margin-left: 15vw;
  margin-top: 10vh;
  background-color: transparent;
  min-height: 90vh;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const TrendingBannerContainer = styled.div`
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

export const TrendingBannerText = styled.h1`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 30px;
  font-weight: 500;
`

export const TrendingIconCon = styled.div`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background-color: ${props => (props.darkMode ? '#181818' : '#d7dfe9')};
  margin-right: 14px;
  padding: 14px;
  margin-left: 30px;
`

export const TrendingVideosList = styled.ul`
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

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
