/* eslint-disable */

class SidePanelItem extends React.Component {
  render() {
    const duration = this.props.duration / 1000000
    let durationClass = 'duration--good'
    if (duration > 500) durationClass = 'duration--ok'
    if (duration > 1000) durationClass = 'duration--bad'

    return e(
      'div', { className: `side-panel-item ${this.props.selected && 'selected'}`, onClick: this.props.handleClick },

      e('div', { className: `side-panel-item__duration ${durationClass}` }, formatTime(this.props.duration)),
      e('div', { className: 'side-panel-item__remove', onClick: this.props.handleRemove }, 'x'),
    )
  }
}


class SidePanel extends React.Component {
  render() {
    const {
      requests, handleClick, handleRemove, handleClear, selectedIndex,
    } = this.props

    return e(
      'div',
      { className: 'side-panel' },
      e(
        'div', { className: 'side-panel-wrapper' },
        requests.map(({ duration, name, startTime }, index) => (
          e(
            SidePanelItem,
            {
              key: `${name}-${startTime}-${duration}`,
              selected: index === selectedIndex,
              duration,
              name,
              startTime,
              handleClick: (e) => handleClick(e, index),
              handleRemove: (e) => handleRemove(e, index),
            },
          )
        )),
        requests.length > 2 && e('div', { className: 'side-panel-item__clear', onClick: handleClear }, 'Clear'),
      ),
    )
  }
}
