import React, { useEffect, useState } from 'react'

import dislike from '../../Assets/dislike.svg'
import like from '../../Assets/like.jpg'

import { FooterContainer, Like, Dislike } from './styled'

export default function MatchScren(props) {
  return (
    <FooterContainer>
      <Dislike src={dislike} onClick={() => props.choosePerson(false)} />
      <Like src={like} onClick={() => props.choosePerson(true)} />
    </FooterContainer>
  )
}
