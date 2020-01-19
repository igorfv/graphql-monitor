import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SideBar from '../side-bar'
import SideBarToogle from '../side-bar-toggle'
import Main from '../main'

import './style.scss'


const Layout = ({
  requests, handleClick, handleRemove, handleClear, selectedIndex,
}) => {
  const [active, setActive] = useState(true)

  return (
    <div className="layout">
      <div className={`layout__side-bar ${active && 'active'}`}>
        <SideBar
          requests={requests}
          handleClick={handleClick}
          handleRemove={handleRemove}
          handleClear={handleClear}
          selectedIndex={selectedIndex}
        />
      </div>
      <SideBarToogle active={active} setActive={setActive} />
      <div className="layout__main-content">
        <Main
          request={requests[selectedIndex]}
        />
      </div>
    </div>
  )
}

Layout.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
}

Layout.defaultProps = {
  selectedIndex: null,
}

export default Layout
