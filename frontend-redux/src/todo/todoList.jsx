import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'asDone' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.handleAsDone(todo)}
          />
          <IconButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.handleAsPending(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

const mapStoreToProps = state => ({ list: state.list })

export default connect(mapStoreToProps)(TodoList)
