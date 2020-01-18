import './reset.scss'


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
}

export default App
