import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 400px;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ced4da;
  height: 60px;

  h2 {
    margin: 0;
    grid-column: 2;
  }
`

export const HeaderImg = styled.img`
  height: 30px;
  width: auto;

  :hover {
    transform: scale(0.9);
  }
`

export const Astro = styled.span`
  color: #48a498;
`

export const Match = styled.span`
  color: #762d93;
`
