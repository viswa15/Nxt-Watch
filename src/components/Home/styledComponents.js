import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const HomeMainContainer = styled.div`
  width: 85vw;
  min-height: 90vh;
  margin-left: 15vw;
  margin-top: 10vh;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-left: 0;
    padding: 6px;
  }
`

export const HomeListsContainer = styled.div`
  width: 100%;
  padding: 20px 0 0 0;
  margin-top: 15px;
  @media screen and (max-width: 567px) {
    padding: 10px;
    margin-top: 5px;
  }
`

export const BannerContainer = styled.div`
  height: 35vh;
  width: 100%;
  display: ${props => props.display};
  background: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media screen and (max-width: 567px) {
    height: 150px;
  }
`

export const BannerLeftContainer = styled.div`
  padding: 30px;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 767px) {
    padding: 6px;
    width: 70%;
  }
`

export const BannerLogo = styled.img`
  width: 140px;
  height: 40px;
  margin-bottom: 14px;
  @media screen and (max-width: 567px) {
    width: 80px;
    height: 20px;
    margin-bottom: 2px;
  }
`

export const BannerHeading = styled.p`
  color: #000000;
  font-size: 22px;
  margin-bottom: 13px;
  font-weight: 500;
  display: ${props => props.bannerView};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const BannerBtn = styled.button`
  padding: 10px;
  border: 1px solid #000000;
  color: #000000;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    padding: 4px;
    font-size: 7px;
  }
`

export const BannerRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  padding: 10px;
`

export const BannerCloseBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  width: 500px;
  height: 44px;
  background-color: ${props => (props.darkMode ? 'transparent' : '#ffffff')};
  margin-bottom: 15px;
  border: 1px solid #cbd5e1;
  margin-left: 18px;
  border-radius: 7px;
  @media screen and (max-width: 567px) {
    width: 90%;
    margin: 0;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  color: #475569;
  width: 88%;
  font-size: 20px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 8px;
`

export const SearchIconButton = styled.button`
  background-color: ${props => (props.darkMode ? '#231f20' : '#f9f9f9')};
  border: none;
  cursor: pointer;
  padding: 6px;
  height: 100%;
  width: 12%;
  border-radius: 7px;
`
