import React, { Component } from 'react'

export default class Grid extends Component {
  /**
   * @param {string} numbers
   */
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if (cols[0]) classes += `col-xs-${cols[0]}`
    if (cols[1]) classes += ` col-sm-${cols[1]}`
    if (cols[2]) classes += ` col-md-${cols[2]}`
    if (cols[3]) classes += ` col-lg-${cols[3]}`

    return classes
  }

  render() {
    const gridClasse = this.toCssClasses(this.props.cols || 12)
    return <div className={gridClasse}>{this.props.children}</div>
  }
}
