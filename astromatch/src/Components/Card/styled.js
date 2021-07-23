import styled from 'styled-components'

export const ContainerImg = styled.div`
  position: relative;
  justify-content: center;
`

export const Photo = styled.img`
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 440px;
  width: 360px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const InfosContainer = styled.div`
  position: absolute;
  bottom: 36px;
  left: 16px;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;

  p {
    padding: 0px;
    margin-top: 0px;
    padding-right: 24px;
  }

  h2 {
    margin-bottom: 4px;
  }
`
