import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {IoSearch} from 'react-icons/io5'

import Header from '../Header'
import SideBarView from '../SideBarView'
import FailureView from '../FailureView' /* failure view */
import HomeVideos from '../HomeVideos' /* success view */
import LoaderView from '../LoaderView' /* progress view */

import {
  BannerContainer,
  BannerLeftContainer,
  BannerLogo,
  BannerHeading,
  BannerBtn,
  BannerRightContainer,
  BannerCloseBtn,
  HomeMainContainer,
  HomeBgContainer,
  HomeListsContainer,
  SearchContainer,
  SearchInput,
  SearchIconButton,
} from './styledComponents'

import Nxtwatch from '../../context/Nxtwatch'

const apiStatusInfo = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    bannerView: 'block',
    apiStatus: apiStatusInfo.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusInfo.inProgress,
    })
    const {searchInput} = this.state
    console.log(searchInput)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    console.log(apiUrl)
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiStatusInfo.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusInfo.failure,
      })
    }
  }

  onClickBannerCloseBtn = () => {
    this.setState({
      bannerView: 'none',
    })
  }

  renderBanner = () => {
    const {bannerView} = this.state
    const display = bannerView
    return (
      <BannerContainer display={display} data-testid="banner">
        <BannerLeftContainer>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerHeading>
            Buy Nxt watch Premium prepaid plans with <br /> UPI
          </BannerHeading>
          <BannerBtn type="button">GET IT NOW</BannerBtn>
        </BannerLeftContainer>
        <BannerRightContainer>
          <BannerCloseBtn
            onClick={this.onClickBannerCloseBtn}
            data-testid="close"
          >
            <IoMdClose size={30} />
          </BannerCloseBtn>
        </BannerRightContainer>
      </BannerContainer>
    )
  }

  onRetry = () => {
    this.setState(
      {
        searchInput: '',
      },
      this.getVideos,
    )
  }

  getSearchResults = () => {
    this.getVideos()
  }

  renderSuccess = () => {
    const {videosList} = this.state
    return <HomeVideos videosList={videosList} onRetry={this.onRetry} />
  }

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusInfo.success:
        return this.renderSuccess()
      case apiStatusInfo.failure:
        return <FailureView onRetry={this.onRetry} />
      case apiStatusInfo.inProgress:
        return <LoaderView />
      default:
        return ''
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <Nxtwatch.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <>
              <Header />
              <HomeBgContainer>
                <SideBarView />
                <HomeMainContainer data-testid="home" darkMode={darkMode}>
                  {this.renderBanner()}
                  <HomeListsContainer>
                    <SearchContainer darkMode={darkMode}>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onEnterSearchInput}
                      />
                      <SearchIconButton
                        type="button"
                        onClick={this.getSearchResults}
                        aria-label="icon"
                        darkMode={darkMode}
                        data-testid="searchButton"
                      >
                        <IoSearch size={25} color="#cccccc" />
                      </SearchIconButton>
                    </SearchContainer>
                    {this.renderResult()}
                  </HomeListsContainer>
                </HomeMainContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </Nxtwatch.Consumer>
    )
  }
}

export default Home
