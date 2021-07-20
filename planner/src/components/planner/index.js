import React from 'react'
import AdicionarTarefa from '../adiciona-tarefa'
import ListaTarefas from '../listaTarefas'
import Header from '../header'

export class Planner extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <AdicionarTarefa></AdicionarTarefa>
        <ListaTarefas></ListaTarefas>
      </>
    )
  }
}
