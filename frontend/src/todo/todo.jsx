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

    this.handleRemove = this.handleRemove.bind(this)
    this.handleAsDone = this.handleAsDone.bind(this)
    this.handleAsPending = this.handleAsPending.bind(this)

    this.refresh()
  }

  handleAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(res => this.refresh())
  }

  handleAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(res => this.refresh())
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`).then(res =>
      this.setState({
        ...this.state,
        description: '',
        list: res.data
      })
    )
  }

  handleApp() {
    const description = this.state.description
    axios.post(URL, { description }).then(resp => this.refresh())
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
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleAsDone={this.handleAsDone}
          handleAsPending={this.handleAsPending}
        />
      </div>
    )
  }
}
