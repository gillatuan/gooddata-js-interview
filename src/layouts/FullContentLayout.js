import React from 'react'
import './index.css'

export default class FullContentLayout extends React.Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>
  }
}