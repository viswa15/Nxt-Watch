import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImg = styled.img`
  width: 70%;
  height: 380px;
  margin-bottom: 20px;
  @media screen and (max-width: 567px) {
    width: 85%;
    height: 260px;
  }
`

export const FailureViewHeading = styled.h1`
  font-size: 38px;
  margin-bottom: 16px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`

export const FailureViewDescription = styled.p`
  color: ${props => (props.darkMode ? '#e2e8f0' : '#475569')};
  font-size: 22px;
`

export const RetryBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`
