import React, { useState, useEffect } from 'react'

import Dia from '../dia'

import styled from 'styled-components'

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

const DiaContainer = styled.div`
  flex: flex;
  flex-direction: column;
  align-items: center;
`
const TextCotainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8%;
  justify-content: center;
  align-items: center;
`

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  margin: {
    margin: theme.spacing(1),
    border: theme.spacing(0),    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([])

  const [domingo, setDomingo] = useState([])
  const [segunda, setSegunda] = useState([])
  const [terça, setTerça] = useState([])
  const [quarta, setQuarta] = useState([])
  const [quinta, setQuinta] = useState([])
  const [sexta, setSexta] = useState([])
  const [sabado, setSabado] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-muyembe-bruno',
    }

    axios
      .request(options)
      .then(function (response) {
        setTarefas(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    setDomingo(tarefas.filter((tarefa) => tarefa.day === 'Domingo'))
    setSegunda(tarefas.filter((tarefa) => tarefa.day === 'Segunda'))
    setTerça(tarefas.filter((tarefa) => tarefa.day === 'Terça'))
    setQuarta(tarefas.filter((tarefa) => tarefa.day === 'Quarta'))
    setQuinta(tarefas.filter((tarefa) => tarefa.day === 'Quinta'))
    setSexta(tarefas.filter((tarefa) => tarefa.day === 'Sexta'))
    setSabado(tarefas.filter((tarefa) => tarefa.day === 'Sabado'))
  }, [tarefas])

  function handleDeteleClick(props) {
    const options = {
      method: 'DELETE',
      url: `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-muyembe-bruno/${props}`,
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Grid container spacing={3} component={Paper} >

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Domingo" texto></Dia>
            {domingo.map((tarefa) => (
              <TextCotainer key={tarefa.id} >
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Segunda" texto></Dia>
            {segunda.map((tarefa) => (
              <TextCotainer key={tarefa.id}>
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Terça" texto></Dia>
            {terça.map((tarefa) => (
              <TextCotainer key={tarefa.id}>
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Quarta" texto></Dia>
            {quarta.map((tarefa) => (
              <TextCotainer key={tarefa.id}>
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Quinta" texto></Dia>
            {quinta.map((tarefa) => (
              <TextCotainer key={tarefa.id}>
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Sexta" texto></Dia>
            {sexta.map((tarefa) => (
              <TextCotainer key={tarefa.id}>
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>

        <Grid item xs className={classes.paper}>
          <DiaContainer>
            <Dia dia="Sabado" texto></Dia>
            {sabado.map((tarefa) => (
              <TextCotainer key={tarefa.id}>
                {tarefa.text}
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => handleDeteleClick(tarefa.id)}
                  />
                </IconButton>
              </TextCotainer>
            ))}
          </DiaContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default ListaTarefas
