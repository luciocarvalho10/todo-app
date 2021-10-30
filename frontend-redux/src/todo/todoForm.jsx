import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/iconButton'
import { changeDescription, searchList, addList } from './todoAction'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.searchList()
  }

  keyHandler(e) {
    const { searchList, addList, description } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? searchList() : addList(description)
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    const { searchList, addList, description } = this.props

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
              // onClick={this.props.handleAdd}
              onClick={() => addList(description)}
            />
            <IconButton
              style="info"
              icon="search"
              onClick={() => searchList()}
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

const mapStoreToProps = state => ({ description: state.description })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, searchList, addList }, dispatch)

export default connect(mapStoreToProps, mapDispatchToProps)(TodoForm)
