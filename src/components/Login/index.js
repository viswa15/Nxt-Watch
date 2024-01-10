import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Nxtwatch from '../../context/Nxtwatch'

import {
  LoginBgContainer,
  LoginMainContainer,
  LoginLogoCon,
  LoginLogo,
  LoginLabel,
  LoginInput,
  LoginBtn,
  ErrorMsg,
  ShowPasswordCon,
  ShowPasswordInput,
  ShowPasswordLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <Nxtwatch.Consumer>
        {value => {
          const {darkMode} = value
          console.log(darkMode)
          const logoImgUrl = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginBgContainer darkMode={darkMode}>
              <LoginMainContainer darkMode={darkMode}>
                <LoginLogoCon>
                  <LoginLogo src={logoImgUrl} alt="website logo" />
                </LoginLogoCon>
                <form onSubmit={this.onSubmitLoginForm}>
                  <LoginLabel htmlFor="username" darkMode={darkMode}>
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    id="username"
                    placeholder="Username"
                    darkMode
                  />
                  <LoginLabel htmlFor="password" darkMode={darkMode}>
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    type={passwordType}
                    value={password}
                    onChange={this.onChangePassword}
                    id="password"
                    placeholder="password"
                    darkMode
                  />
                  <ShowPasswordCon>
                    <ShowPasswordInput
                      value={showPassword}
                      type="checkbox"
                      id="check-box"
                      onClick={this.onToggleShowPassword}
                    />
                    <ShowPasswordLabel htmlFor="check-box" darkMode={darkMode}>
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordCon>
                  <LoginBtn type="login">Login</LoginBtn>
                  {showSubmitError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
                </form>
              </LoginMainContainer>
            </LoginBgContainer>
          )
        }}
      </Nxtwatch.Consumer>
    )
  }
}

export default Login
