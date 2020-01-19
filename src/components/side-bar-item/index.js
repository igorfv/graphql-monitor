import React from 'react'
import PropTypes from 'prop-types'

import formatTime from '../../util/formart-time'

import './style.scss'


const SideBarItem = ({
  handleClick, handleRemove, selected, name, startTime, duration: durationRaw,
}) => {
  const duration = durationRaw / 1000000
  let durationClass = 'duration--good'
  if (duration > 500) durationClass = 'duration--ok'
  if (duration > 1000) durationClass = 'duration--bad'

  return (
    <div role="button" className={`side-bar-item ${selected && 'selected'}`} onClick={handleClick}>
      <div className="side-bar-item__name">{name}</div>
      <div className="side-bar-item__start-time">{new Date(startTime).toLocaleTimeString()}</div>
      <div className={`side-bar-item__duration ${durationClass}`}>{formatTime(durationRaw)}</div>
      <div className="side-bar-item__remove" role="button" onClick={handleRemove}>x</div>
    </div>
  )
}

SideBarItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  startTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
}

export default SideBarItem
