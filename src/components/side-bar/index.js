import React from 'react'
import PropTypes from 'prop-types'

import SideBarItem from '../side-bar-item'

import './style.scss'


const SideBar = ({
  requests, handleClick, handleRemove, handleClear, selectedIndex,
}) => (
  <div className="side-bar">
    {
      requests.map(({ duration, name, startTime }, index) => (
        <SideBarItem
          key={`${name}-${startTime}-${duration}`}
          selected={index === selectedIndex}
          duration={duration}
          name={name}
          startTime={startTime}
          handleClick={(e) => handleClick(e, index)}
          handleRemove={(e) => handleRemove(e, index)}
        />
      ))
    }
    {
      requests.length > 0
      && (
        <div
          role="button"
          className="side-bar__clear"
          onClick={handleClear}
        >
          Clear
        </div>
      )
    }
  </div>
)

SideBar.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
}

SideBar.defaultProps = {
  selectedIndex: null,
}

export default SideBar
