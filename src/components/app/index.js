import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../../css/reset.scss'


class App extends Component {
  state = {
    selectedIndex: null,
  }

  componentDidMount() {
    const { tracing } = this.props
    tracing.onChange(() => this.forceUpdate())
  }

  handleClick = (e, index) => {
    this.setState({ selectedIndex: index })
  }

  handleRemove = (e, index) => {
    e.stopPropagation()

    const { selectedIndex } = this.state
    const { tracing } = this.props

    if (selectedIndex === index) this.setState({ selectedIndex: null })
    tracing.remove(index)
  }

  handleClear = (e) => {
    e.stopPropagation()

    const { tracing } = this.props
    tracing.clear()
  }

  render() {
    return (<h1>Hey</h1>)
  }
}

App.propTypes = {
  tracing: PropTypes.shape({
    requests: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    remove: PropTypes.func,
    clear: PropTypes.func,
  }).isRequired,
}

export default App
