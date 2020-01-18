class App extends React.Component {
  state = {
    selectedIndex: null,
  }

  componentDidMount() {
    this.props.tracing.onChange(() => {
      this.forceUpdate()
    })
  }

  handleClick = (e, index) => {
    this.setState({ selectedIndex: index })
  }

  handleRemove = (e, index) => {
    e.stopPropagation()

    const { selectedIndex } = this.state
    if (selectedIndex === index) this.setState({ selectedIndex: null })

    this.props.tracing.remove(index)
  }

  handleClear = (e) => {
    this.props.tracing.clear()
  }

  render () {
    const requests = this.props.tracing.requests
    const { selectedIndex } = this.state
    const { handleClick, handleRemove, handleClear } = this

    return (
      e(
        React.Fragment,
        null,
        requests.length === 0 && e('div', { className: 'message-panel' }, MessagePanel),
        e(SidePanel, { requests, handleClick, handleRemove, handleClear, selectedIndex }),
        e(MainPanel, { request: requests[selectedIndex] || null })
      )
    )
  }
}

ReactDOM.render(
  e(App, { tracing: tracingData }),
  document.getElementById('root')
)
