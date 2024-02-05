import styled from 'styled-components'

export const HomeVideosList = styled.ul`
  padding: 0;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;

  flex-wrap: wrap;
  @media screen and (max-width: 567px) {
    flex-direction: column;
    margin-left: 0;
  }
`
export const EmptyVideosView = styled.div`
  background : transparent;
  width : 80%
  margin-top : 30px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content:center;
  min-height : 44vh;
  @media screen and (max-width:567px){
      width:95%;
  }
`

export const EmptyVideosImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    height: 250px;
    width: 200px;
  }
`

export const EmptyViewHeading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const EmptyViewDescription = styled.p`
  color: #475569;
  font-size: 18px;
  margin-bottom: 10px;
`

export const EmptyViewRetryBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`
