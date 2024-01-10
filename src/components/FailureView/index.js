import {
  FailureViewContainer,
  FailureImg,
  FailureViewHeading,
  RetryBtn,
  FailureViewDescription,
} from './styledComponents'

import Nxtwatch from '../../context/Nxtwatch'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <Nxtwatch.Consumer>
      {value => {
        const {darkMode} = value

        const failureImage = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer
            backgroundColor={darkMode ? '#181818' : '#f9f9f9'}
          >
            <FailureImg src={failureImage} alt="failure view" />
            <FailureViewHeading color={darkMode ? '#ffffff' : '#231f20'}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewDescription darkMode={darkMode}>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </FailureViewDescription>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </FailureViewContainer>
        )
      }}
    </Nxtwatch.Consumer>
  )
}

export default FailureView
