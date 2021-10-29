import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/iconButton'
import { changeDescription, searchList } from './todoAction'

class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.searchList()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    return (
      <div>
        <div className="todoForm" role="form">
          <Grid cols="12 9 10">
            <input
              id="description"
              className="form-control"
              placeholder="Adicione uma tarefa"
              onKeyUp={this.props.keyHandler}
              onChange={this.props.changeDescription}
              value={this.props.description}
            />
          </Grid>
          <Grid cols="12 3 2">
            <IconButton
              style="primary"
              icon="plus"
              onClick={this.props.handleAdd}
            />
            <IconButton
              style="info"
              icon="search"
              onClick={this.props.handleSearch}
            />
            <IconButton
              style="default"
              icon="close"
              onClick={this.props.handleClear}
            />
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, searchList }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(TodoForm)
