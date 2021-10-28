import React from 'react'
import { connect } from 'react-redux'
import Grid from '../template/Grid'
import IconButton from '../template/iconButton'

const TodoForm = props => {
  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div>
      <div className="todoForm" role="form">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onKeyUp={keyHandler}
            onChange={props.handleChange}
            value={props.description}
          />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
          <IconButton style="info" icon="search" onClick={props.handleSearch} />
          <IconButton
            style="default"
            icon="close"
            onClick={props.handleClear}
          />
        </Grid>
      </div>
    </div>
  )
}

const mapStoreToProps = state => ({description: state.todo.description})

export default connect(mapStoreToProps)(TodoForm)