import React, { useEffect, useState } from 'react'

import Card from '../../Components/Card'

import { MainScreenContainer } from './styled'
import Footer from '../../Components/Footer'

import axios from 'axios'

export default function MainScreen(props) {
  const [profile, setProfile] = useState({})

  const choosePerson = (response) => {
    const body = {
      id: profile.id,
      choice: response,
    }
    axios
      .post(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-muyembe/choose-person',
        body
      )
      .then(() => {
        getProfile()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getProfile = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-muyembe/person'
      )
      .then((response) => {
        console.log('get profile', response)
        setProfile(response.data.profile)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <MainScreenContainer>
      <Card profile={profile} />
      <Footer choosePerson={choosePerson} />
    </MainScreenContainer>
  )
}
