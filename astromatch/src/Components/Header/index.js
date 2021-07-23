import React from 'react'

import { HeaderContainer, HeaderImg, Astro, Match } from './styled'

import changePageImg from '../../Assets/changePage.svg'
import changePageImg2 from '../../Assets/changePage2.svg'

export default function Header(props) {
  console.log('header', props)
  return (
    <HeaderContainer>
      <h2>
        <Astro>astro</Astro>
        <Match>match</Match>
      </h2>
      {props.currentPage ? (
        <HeaderImg src={changePageImg2} onClick={props.setPage} />
      ) : (
        <HeaderImg src={changePageImg} onClick={props.setPage} />
      )}
    </HeaderContainer>
  )
}
