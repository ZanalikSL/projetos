import React from 'react'

import { ContainerImg, Photo, InfosContainer } from './styled'

export default function Card(props) {
  return (
    <ContainerImg>
      <Photo src={props.profile.photo} alt="Fotos de pessoas" />
      <InfosContainer>
        <h2>
          {props.profile.name}, {props.profile.age}
        </h2>
        <p>{props.profile.bio}</p>
      </InfosContainer>
    </ContainerImg>
  )
}
