import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Empty from './empty'
import Layout from './layout'

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

    this.setState({ selectedIndex: null })
    tracing.clear()
  }

  render() {
    const { selectedIndex } = this.state
    const { tracing } = this.props
    const { requests } = tracing
    const hasRequests = requests.length > 0

    return (
      <>
        {
          hasRequests ? (
            <Layout
              requests={requests}
              handleClick={this.handleClick}
              handleRemove={this.handleRemove}
              handleClear={this.handleClear}
              selectedIndex={selectedIndex}
            />
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
