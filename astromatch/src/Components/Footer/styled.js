import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: grid;
  width: 400px;
  grid-template-columns: auto auto;
  justify-content: space-around;
  align-items: center;
`

export const Like = styled.img`
  display: grid;
  height: 50px;
  width: auto;

  :hover {
    transform: scale(1.1);
  }
`

export const Dislike = styled.img`
  display: grid;
  height: 50px;
  width: auto;
  :hover {
    transform: scale(1.1);
  }
`
