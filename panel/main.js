class PercentageItemText extends React.Component {
  render () {
    const { children, position } = this.props

    return e(
      'div',
      {
        className: `percentage-item-text ${position}`,
      },
      children,
    )
  }
}

class PercentageItem extends React.Component {
  render () {
    const { duration, base, offset, depth, children } = this.props

    const width = parseFloat(100 / base * duration).toFixed(2)
    const marginLeft = parseFloat(100 / base * offset).toFixed(2)

    const baseColor = '#2b445f'
    const background = depth > 0 ? lightenDarkenColor(baseColor, depth * 10) : baseColor

    let position = 'inside'
    if (width < 20) {
      if (marginLeft < 20) position = 'right'
      position = 'left'
    }

    return e(
      'div',
      {
        className: 'percentage-item',
        style: {
          width: `${width}%`,
          marginLeft: `${marginLeft}%`,
          background,
        }
      },
      e(PercentageItemText, { position }, children)
    )
  }
}

const EmptyPanel = e(
  'div',
  { className: 'main-panel-empty' },
  'Nothing to see here =('
)

class MainPanel extends React.Component {
  render () {
    const { request } = this.props

    const { name, duration, resolvers } = request || {}
    const base = duration

    return e(
      'div', { className: 'main-panel' },
      e(
        'div', { className: 'main-panel-wrapper' },
        !request ? EmptyPanel : e(
          React.Fragment, null,
          e('h1', { className: 'main-panel-title' }, name),
          e(PercentageItem, { duration, base, offset: 0, depth: 0 }, formatTime(duration)),
          resolvers.map((resolver) => e(
            PercentageItem,
            {
              key: resolver.path.join('.'),
              base,
              duration: resolver.duration,
              offset: resolver.startOffset,
              depth: resolver.path.length,
            },
            resolver.path.join('.'),
            ' - ',
            formatTime(resolver.duration),
          ))
        )
      )
    )
  }
}
