import styled from 'styled-components'

export const CardStyle = styled.div`
  display: grid;
  grid-template-rows: auto 40px;
  height: 520px;
`

export const CardInfo = styled.div`
  margin: 0 2em;
  max-width: 100%;
  max-height: 480px;
  overflow-y: scroll;
`

export const MatchInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`

export const ButtonClear = styled.button`
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  margin: 12px;
  width: 60px;
  height: 20px;
  cursor: pointer;
`
export const DivButton = styled.div`
  justify-content: center;
  display: grid;
`
export const ImgMatch = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
