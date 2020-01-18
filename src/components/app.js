import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Empty from './empty'

import '../css/reset.scss'


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
    const { tracing } = this.props
    const { requests } = tracing
    const hasRequests = requests.length > 0

    return (
      <>
        {
          hasRequests ? (
            <div>You got mail!</div>
          ) : (
            <Empty />
          )
        }
      </>
    )
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
