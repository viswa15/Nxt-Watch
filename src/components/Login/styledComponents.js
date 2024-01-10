import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`

export const LoginMainContainer = styled.div`
    box-shadow : ${props =>
      props.darkMode ? null : '0px 4px 16px 0px #bfbfbf'};
    background-color : ${props => (props.darkMode ? '#272727' : null)};
    border-radius : 14px;
    width : 470px;
    padding : 35px;
    display : flex:
    flex-direction : column;
    @media screen and (max-width:767px) {
        width : 100%;
        padding : 20px;
    }
`

export const LoginLogoCon = styled.div`
  text-align: center;
`

export const LoginLogo = styled.img`
  align-self: flex-end;
  width: 60%;
  height: 50px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    height: 35px;
    width: 50%;
  }
`

export const LoginLabel = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#7e858e')};
  font-weight: 500;
  margin-bottom: 12px;
`

export const LoginInput = styled.input`
  outline: none;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 16px;
  border: 1px solid #d7dfe9;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    height: 35px;
  }
`

export const LoginBtn = styled.button`
  width: 100%;
  border-radius: 14px;
  color: #ffffff;
  padding: 10px;
  background-color: #3b82f6;
  border: none;
  font-size: 16px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const ShowPasswordCon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: flex-start;
  margin-bottom: 15px;
  cursor: pointer;
`

export const ShowPasswordInput = styled.input`
  margin-right: 10px;
  border: ${props => (props.darkMode ? 'none' : '0.5px solid')};
  border-radius: 6px;
`

export const ShowPasswordLabel = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : 'black')};
`
