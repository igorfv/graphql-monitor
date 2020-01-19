import React, { useState } from 'react'
import PropTypes from 'prop-types'

import PercentageItem from '../percentage-item'

import formatTime from '../../util/formart-time'

import './style.scss'


const Main = ({ request }) => {
  const { name, duration: base, resolvers } = request || {}

  const [hideSmallItems, changeHideSmallItems] = useState(false)

  return (
    <div className="main">
      {
        !request ? (
          <div className="main__empty">
            <p className="main__empty-text">
              {'Select an item on the left to display it\'s content here'}
            </p>
          </div>
        ) : (
          <>
            <h1 className="main__title">{ name }</h1>

            <label className="main__hide-small">
              <input type="checkbox" onChange={() => changeHideSmallItems(!hideSmallItems)} />
              {' Hide items < 1ms '}
            </label>

            <PercentageItem
              base={base}
              duration={base}
              offset={0}
              depth={0}
            >
              {`total - ${formatTime(base)}`}
            </PercentageItem>

            {
              resolvers.map(({ path, duration, startOffset }) => (
                (hideSmallItems && duration < 1 * 1000 * 1000) ? null : (
                  <PercentageItem
                    key={path.join('.')}
                    base={base}
                    duration={duration}
                    offset={startOffset}
                    depth={path.length}
                  >
                    {`${path.join('.')} - ${formatTime(duration)}`}
                  </PercentageItem>
                )
              ))
            }
          </>
        )
      }
    </div>
  )
}

Main.propTypes = {
  request: PropTypes.shape({
    name: PropTypes.string,
    duration: PropTypes.number,
    resolvers: PropTypes.arrayOf(PropTypes.object),
  }),
}

Main.defaultProps = {
  request: null,
}

export default Main
