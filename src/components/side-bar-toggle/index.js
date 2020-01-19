import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'


const SideBarToogle = ({ active, setActive }) => (
  <button
    type="button"
    className="side-bar-toggle"
    onClick={() => { setActive(!active) }}
  >
    { active ? '◄' : '►' }
  </button>
)

SideBarToogle.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func.isRequired,
}

SideBarToogle.defaultProps = {
  active: true,
}

export default SideBarToogle
