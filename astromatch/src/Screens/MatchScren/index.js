import React, { useEffect, useState } from 'react'

import axios from 'axios'

import {
  CardStyle,
  CardInfo,
  ButtonClear,
  ImgMatch,
  DivButton,
  MatchInfo,
} from './styled'

export default function MatchScren(props) {
  const [match, setMatch] = useState([])

  const clear = () => {
    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-muyembe/clear'
      )
      .then(() => {
        getMatch()
        window.alert('Clear OK')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getMatch()
  }, [])

  const getMatch = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-pereira/matches'
      )
      .then((response) => {
        setMatch(response.data.matches)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const viewMatch = match.map((user) => {
    return (
      <MatchInfo key={user.id}>
        <ImgMatch src={user.photo} />
        <p>{user.name}</p>
      </MatchInfo>
    )
  })

  return (
    <CardStyle>
      <CardInfo>{viewMatch}</CardInfo>
      <DivButton>
        <ButtonClear onClick={clear}>Clear</ButtonClear>
      </DivButton>
    </CardStyle>
  )
}
