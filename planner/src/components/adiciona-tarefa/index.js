import React, { useState } from 'react'

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 400,
    },
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  '& > *': {
    margin: theme.spacing(0),
  },
}))

const AdicionarTarefa = () => {
  const [inputText, setInputText] = useState('')
  const [inputDay, setInputDay] = useState('')

  const handleChangeText = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }

  const handleChangeDay = (e) => {
    e.preventDefault()
    setInputDay(e.target.value)
  }

  const armazenamento = () => {
    const options = {
      method: 'POST',
      url: 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-muyembe-bruno',
      headers: { 'content-type': 'application/json' },
      data: { text: inputText, day: inputDay },
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

  const handleSubmit = (e) => {
    e.preventDefault()
    armazenamento()
    setInputText('')
    setInputDay('')
  }

  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-size-normal"
        defaultValue="Normal"
        label="Nova tarefa"
        variant="outlined"
        value={inputText}
        onChange={handleChangeText}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-native-simple">Dia</InputLabel>
        <Select native value={inputDay} onChange={handleChangeDay} label="Dia">
          <option value="Erro">Selecionar Dia</option>
          <option value="Domingo">Domingo</option>
          <option value="Segunda">Segunda</option>
          <option value="Terça">Terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sabado">Sábado</option>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Criar Tarefa
      </Button>
    </form>
  )
}

export default AdicionarTarefa
