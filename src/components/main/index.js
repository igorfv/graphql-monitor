import React from 'react'
import PropTypes from 'prop-types'

import PercentageItem from '../percentage-item'

import formatTime from '../../util/formart-time'

import './style.scss'


const Main = ({ request }) => {
  const { name, duration: base, resolvers } = request || {}

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
                <PercentageItem
                  key={path.join('.')}
                  base={base}
                  duration={duration}
                  offset={startOffset}
                  depth={path.length}
                >
                  {`${path.join('.')} - ${formatTime(duration)}`}
                </PercentageItem>
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
