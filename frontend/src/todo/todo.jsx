import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleApp = this.handleApp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleApp() {
    const description = this.state.description
    axios.post(URL, { description }).then(resp => console.log('Foi!'))
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleApp}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    )
  }
}
