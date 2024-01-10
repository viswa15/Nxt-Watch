import styled from 'styled-components'

export const NotFoundBgContainer = styled.div``

export const NotFoundBackgroundContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`

export const NotFoundContainer = styled.div`
  min-height: 90vh;
  width: 85vw;
  margin-left: 15vw;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 0px;
    width: 100vw;
  }
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  } ;
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
