import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoAction'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { search, add, clear, description } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { changeDescription, search, add, description, clear } = this.props

    return (
      <div>
        <div className="todoForm" role="form">
          <Grid cols="12 9 10">
            <input
              id="description"
              className="form-control"
              placeholder="Adicione uma tarefa"
              onKeyUp={this.keyHandler}
              onChange={changeDescription}
              value={description}
            />
          </Grid>
          <Grid cols="12 3 2">
            <IconButton
              style="primary"
              icon="plus"
              onClick={() => add(description)}
            />
            <IconButton
              style="info"
              icon="search"
              onClick={search}
            />
            <IconButton
              style="default"
              icon="close"
              onClick={clear}
            />
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = state => ({ description: state.description })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(TodoForm)
